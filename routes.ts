import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema, insertContactSchema } from "@shared/schema";
import { newsService } from "./services/newsService";
import { emailService } from "./services/emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingNewsletter = await storage.getNewsletterByEmail(validatedData.email);
      if (existingNewsletter) {
        return res.status(400).json({ message: "Email already subscribed to newsletter" });
      }

      const newsletter = await storage.createNewsletter(validatedData);
      
      // Send welcome email
      await emailService.sendWelcomeEmail(newsletter.email);
      
      res.status(201).json({ message: "Successfully subscribed to newsletter", id: newsletter.id });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ message: "Failed to subscribe to newsletter" });
    }
  });



  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send notification email to admin
      await emailService.sendContactNotification(contact);
      
      // Send confirmation email to user
      await emailService.sendContactConfirmation(contact.email, contact.firstName);
      
      res.status(201).json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ message: "Failed to submit contact form" });
    }
  });

  // Real-time news system status endpoint (must come before parameterized routes)
  app.get("/api/news/status", async (req, res) => {
    try {
      const allArticles = await storage.getAllNewsArticles();
      
      const categoryBreakdown = allArticles.reduce((acc, article) => {
        acc[article.category] = (acc[article.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const latestUpdate = allArticles.length > 0 
        ? Math.max(...allArticles.map(a => new Date(a.publishedAt).getTime()))
        : 0;
      
      const serviceStatus = newsService.getStatus();
      
      res.json({
        totalArticles: allArticles.length,
        categories: categoryBreakdown,
        lastUpdate: latestUpdate ? new Date(latestUpdate).toISOString() : null,
        systemStatus: "Quantum AI Intelligence Active - Hourly automatic refresh enabled",
        refreshSystem: serviceStatus,
        nextUpdate: serviceStatus.nextRefresh ? serviceStatus.nextRefresh.toISOString() : "Next hourly update"
      });
    } catch (error) {
      console.error("Error getting news status:", error);
      res.status(500).json({ error: "Failed to get news status" });
    }
  });

  // Get all news articles
  app.get("/api/news", async (req, res) => {
    try {
      const articles = await storage.getAllNewsArticles();
      res.json(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  });

  // Get news articles by category (with status endpoint handling)
  app.get("/api/news/:category", async (req, res) => {
    try {
      const { category } = req.params;
      
      // Handle status endpoint
      if (category === "status") {
        const allArticles = await storage.getAllNewsArticles();
        const categoryBreakdown = allArticles.reduce((acc, article) => {
          acc[article.category] = (acc[article.category] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        const latestUpdate = allArticles.length > 0 
          ? Math.max(...allArticles.map(a => new Date(a.publishedAt).getTime()))
          : 0;
        
        const serviceStatus = newsService.getStatus();
        
        return res.json({
          totalArticles: allArticles.length,
          categories: categoryBreakdown,
          lastUpdate: latestUpdate ? new Date(latestUpdate).toISOString() : null,
          systemStatus: "Quantum AI Intelligence Active - Hourly automatic refresh enabled",
          refreshSystem: serviceStatus,
          nextUpdate: serviceStatus.nextRefresh ? serviceStatus.nextRefresh.toISOString() : "Next hourly update"
        });
      }
      
      // Handle regular category requests
      const articles = await storage.getNewsArticlesByCategory(category);
      res.json(articles);
    } catch (error) {
      console.error("Error fetching news by category:", error);
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  });

  // Refresh news endpoint (for manual refresh)
  app.post("/api/news/refresh", async (req, res) => {
    try {
      await newsService.fetchAndStoreNews();
      res.json({ message: "News refresh completed successfully" });
    } catch (error) {
      console.error("News refresh error:", error);
      res.status(500).json({ message: "Failed to refresh news" });
    }
  });

  // Hourly critical news update endpoint
  app.post("/api/news/critical-update", async (req, res) => {
    try {
      await newsService.fetchAndStoreNews();
      res.json({ message: "Critical news update completed successfully" });
    } catch (error) {
      console.error("Critical news update error:", error);
      res.status(500).json({ message: "Failed to update critical news" });
    }
  });



  // Get newsletter subscribers (admin endpoint)
  app.get("/api/admin/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getAllNewsletters();
      res.json(newsletters);
    } catch (error) {
      console.error("Error fetching newsletters:", error);
      res.status(500).json({ message: "Failed to fetch newsletter subscribers" });
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  // Initialize news service
  newsService.initialize();

  const httpServer = createServer(app);
  return httpServer;
}
