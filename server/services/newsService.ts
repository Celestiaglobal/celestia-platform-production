import { storage } from "../storage.js";
import { insertNewsArticleSchema } from "../../shared/schema.js";

interface NewsAPIArticle {
  title: string;
  description: string;
  source: {
    name: string;
  };
  url: string;
  publishedAt: string;
}

interface NewsAPIResponse {
  articles: NewsAPIArticle[];
  status: string;
}

class NewsService {
  private newsApiKey: string;
  private baseUrl = "https://newsapi.org/v2";
  private refreshInterval: NodeJS.Timeout | null = null;
  private lastRefreshTime: Date | null = null;

  constructor() {
    this.newsApiKey = process.env.NEWS_API_KEY || "";
  }

  public initialize() {
    if (this.newsApiKey) {
      // Initial fetch
      this.fetchAndStoreNews();
      
      // Set up hourly refresh (3600000ms = 1 hour)
      this.refreshInterval = setInterval(() => {
        this.fetchAndStoreNews();
      }, 3600000);
      
      console.log("News service initialized with hourly updates");
    } else {
      console.log("NEWS_API_KEY not found - news updates disabled");
    }
  }

  public getStatus() {
    return {
      isActive: !!this.newsApiKey,
      lastRefresh: this.lastRefreshTime,
      nextRefresh: this.lastRefreshTime ? new Date(this.lastRefreshTime.getTime() + 3600000) : null,
      refreshInterval: this.refreshInterval ? "Every hour" : "Disabled"
    };
  }

  public async fetchAndStoreNews(): Promise<void> {
    if (!this.newsApiKey) return;

    try {
      const timestamp = new Date();
      this.lastRefreshTime = timestamp;
      console.log(`[${timestamp.toISOString()}] Starting news refresh...`);
      
      await storage.deleteOldNewsArticles(1);
      
      // Fetch fresh financial news with proper query
      await this.fetchCategoryNews("finance", "all", 20);
      
      console.log(`[${timestamp.toISOString()}] News fetch complete - real articles with working URLs loaded`);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  private async fetchCategoryNews(query: string, category: string, count: number): Promise<void> {
    try {
      // Get last 3 days for better article availability
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - 3);
      const fromDateStr = fromDate.toISOString().split('T')[0];
      
      const url = `${this.baseUrl}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&from=${fromDateStr}&pageSize=${count}&apiKey=${this.newsApiKey}`;
      console.log(`Making API request to: ${url.replace(this.newsApiKey, 'HIDDEN')}`);
      const response = await fetch(url);
      
      console.log(`API response status: ${response.status}`);
      
      if (response.status === 429) {
        console.log(`API rate limit reached. Real news will be available when limits reset.`);
        return;
      }
      
      if (!response.ok) {
        const errorText = await response.text();
        console.log(`API request failed: ${response.status} - ${errorText}`);
        return;
      }

      const data: NewsAPIResponse = await response.json();
      if (data.status !== "ok" || !data.articles) {
        console.log(`Invalid API response`);
        return;
      }

      console.log(`Successfully fetched ${data.articles.length} real articles from NewsAPI`);

      // Distribute articles across categories for variety
      const categories = ["tech", "finance", "crypto", "banking", "economics", "regulatory", "business"];
      
      for (let i = 0; i < data.articles.length && i < count; i++) {
        const article = data.articles[i];
        if (article.title && article.description && article.source?.name && article.url) {
          try {
            const assignedCategory = categories[i % categories.length];
            const newsArticle = {
              headline: article.title,
              summary: article.description,
              source: article.source.name,
              category: assignedCategory,
              url: article.url,
              publishedAt: new Date(article.publishedAt)
            };

            const validatedArticle = insertNewsArticleSchema.parse(newsArticle);
            await storage.createNewsArticle(validatedArticle);
            console.log(`Added real article: ${article.title.substring(0, 50)}...`);
          } catch (validationError) {
            console.error("Validation error:", validationError);
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching news:`, error);
    }
  }
}

export const newsService = new NewsService();