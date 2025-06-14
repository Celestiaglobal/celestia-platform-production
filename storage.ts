import { 
  users, 
  newsletters, 
  contacts, 
  newsArticles,
  type User, 
  type InsertUser,
  type Newsletter,
  type InsertNewsletter,
  type Contact,
  type InsertContact,
  type NewsArticle,
  type InsertNewsArticle
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Newsletter methods
  getNewsletter(id: number): Promise<Newsletter | undefined>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getAllNewsletters(): Promise<Newsletter[]>;
  
  // Contact methods
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  // News Article methods
  getNewsArticle(id: number): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  getAllNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticlesByCategory(category: string): Promise<NewsArticle[]>;
  deleteOldNewsArticles(olderThanDays: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletters: Map<number, Newsletter>;
  private contacts: Map<number, Contact>;
  private newsArticles: Map<number, NewsArticle>;
  private currentUserId: number;
  private currentNewsletterId: number;
  private currentContactId: number;
  private currentNewsArticleId: number;

  constructor() {
    this.users = new Map();
    this.newsletters = new Map();
    this.contacts = new Map();
    this.newsArticles = new Map();
    this.currentUserId = 1;
    this.currentNewsletterId = 1;
    this.currentContactId = 1;
    this.currentNewsArticleId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Newsletter methods
  async getNewsletter(id: number): Promise<Newsletter | undefined> {
    return this.newsletters.get(id);
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      subscribedAt: new Date(),
      isActive: true
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  // Contact methods
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // News Article methods
  async getNewsArticle(id: number): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = this.currentNewsArticleId++;
    const article: NewsArticle = { 
      ...insertArticle, 
      id, 
      createdAt: new Date()
    };
    this.newsArticles.set(id, article);
    return article;
  }

  async getAllNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getNewsArticlesByCategory(category: string): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values())
      .filter(article => article.category === category)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async deleteOldNewsArticles(olderThanDays: number): Promise<void> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);
    
    for (const [id, article] of this.newsArticles.entries()) {
      if (article.publishedAt < cutoffDate) {
        this.newsArticles.delete(id);
      }
    }
  }
}

export const storage = new MemStorage();
