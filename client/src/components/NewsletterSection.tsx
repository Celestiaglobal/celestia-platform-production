import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeToNewsletter = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to our newsletter. You'll receive market insights and exclusive content.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    subscribeToNewsletter.mutate(email);
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Stay Ahead of Market Trends
        </h2>
        <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
          Get exclusive insights, market analysis, and investment opportunities delivered to your inbox. Join our community of forward-thinking investors.
        </p>
        
        {/* Newsletter Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input 
            type="email" 
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 text-slate-900 placeholder-slate-400 border-0 focus:ring-2 focus:ring-primary bg-white"
            disabled={subscribeToNewsletter.isPending}
          />
          <Button 
            type="submit"
            disabled={subscribeToNewsletter.isPending}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-all duration-200 whitespace-nowrap"
          >
            {subscribeToNewsletter.isPending ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>
        
        <p className="text-slate-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
