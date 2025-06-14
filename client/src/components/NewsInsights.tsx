import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, RefreshCw } from "lucide-react";
import { NewsArticle } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import NewsInsightsHeader from "./NewsInsightsHeader";

type NewsCategory = "all" | "tech" | "finance" | "crypto" | "banking" | "economics" | "regulatory" | "business";

export default function NewsInsights() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data: allNews = [], isLoading, refetch } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  const filteredNews = activeCategory === "all" 
    ? allNews 
    : allNews.filter(article => article.category === activeCategory);

  const handleCategoryFilter = (category: NewsCategory) => {
    setActiveCategory(category);
  };

  const handleRefreshNews = async () => {
    setIsRefreshing(true);
    try {
      await apiRequest("POST", "/api/news/refresh");
      await refetch();
    } catch (error) {
      console.error("Failed to refresh news:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tech":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "finance":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "crypto":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "banking":
        return "bg-green-100 text-green-800 border-green-200";
      case "economics":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "regulatory":
        return "bg-red-100 text-red-800 border-red-200";
      case "business":
        return "bg-slate-100 text-slate-800 border-slate-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatTimeAgo = (date: string | Date) => {
    const now = new Date();
    const publishedDate = new Date(date);
    const diffInHours = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Less than an hour ago";
    if (diffInHours === 1) return "1 hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "1 day ago";
    return `${diffInDays} days ago`;
  };

  if (isLoading) {
    return (
      <>
        <NewsInsightsHeader onRefresh={handleRefreshNews} isRefreshing={isRefreshing} />
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-16 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section id="market-insights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Market Insights & News
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            8 top quality articles per day per category with hourly critical updates. Premium institutional-grade analysis from global financial sources.
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-500">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Daily Refresh</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Hourly Critical Updates</span>
          </div>
        </div>

        {/* Global Forum Categories */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
            {[
              { key: "all", label: "All Insights" },
              { key: "tech", label: "Technology" },
              { key: "finance", label: "Finance" },
              { key: "crypto", label: "Crypto & Web3" },
              { key: "banking", label: "Banking" },
              { key: "economics", label: "Economics" },
              { key: "regulatory", label: "Regulatory" },
              { key: "business", label: "Business" }
            ].map(({ key, label }) => (
              <Button
                key={key}
                onClick={() => handleCategoryFilter(key as NewsCategory)}
                variant={activeCategory === key ? "default" : "outline"}
                size="sm"
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === key 
                    ? "bg-primary text-white shadow-sm" 
                    : "border-primary/20 text-primary hover:bg-primary/10"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleRefreshNews}
            variant="outline"
            size="sm"
            disabled={isRefreshing}
            className="inline-flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? "Refreshing..." : "Refresh News"}
          </Button>
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              No news articles available at the moment. Please check back later or try refreshing.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {filteredNews.slice(0, 8).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">{article.source}</h4>
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category.toUpperCase()}
                    </Badge>
                    <span className="text-slate-500 text-sm">
                      {formatTimeAgo(article.publishedAt)}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 line-clamp-2">
                    {article.headline}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{article.source}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1"
                      onClick={() => window.open(article.url, '_blank')}
                    >
                      Read More <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
