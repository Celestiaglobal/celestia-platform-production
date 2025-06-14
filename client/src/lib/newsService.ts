import { NewsArticle } from "@shared/schema";

export class NewsService {
  static async getAllNews(): Promise<NewsArticle[]> {
    const response = await fetch('/api/news', {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch news articles');
    }
    
    return response.json();
  }

  static async getNewsByCategory(category: string): Promise<NewsArticle[]> {
    const response = await fetch(`/api/news/${category}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${category} news articles`);
    }
    
    return response.json();
  }

  static async refreshNews(): Promise<void> {
    const response = await fetch('/api/news/refresh', {
      method: 'POST',
      credentials: 'include'
    });
    
    if (!response.ok) {
      throw new Error('Failed to refresh news');
    }
  }
}
