import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleExploreServices = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewInsights = () => {
    const element = document.getElementById('market-insights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-display-lg lg:text-display-xl text-foreground mb-8">
              <span className="text-primary">Digital Finance</span>, Education, Quantum & Biotechnology Strategy
            </h1>
            <p className="font-body text-body-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Comprehensive strategic consulting across digital finance, educational technology, quantum computing, and biotechnology sectors for institutional investors and enterprise clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open('https://calendly.com/partners-celestiaholdings', '_blank')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-200 font-heading"
              >
                Schedule Meeting
              </Button>
              <Button 
                onClick={handleViewInsights}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-200 font-heading"
              >
                Market Analysis
              </Button>
            </div>
          </div>
        </div>
          
        {/* Visual Elements */}
        <div className="mt-20 relative">
          <div className="flex justify-center items-center space-x-8 opacity-80 flex-wrap gap-y-8">
            {/* Digital Finance Icon */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3 border border-primary/20">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Digital Finance</span>
            </div>
            
            {/* Connection Line */}
            <div className="w-12 h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 hidden md:block"></div>
            
            {/* Education Icon */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3 border border-primary/20">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Education</span>
            </div>
            
            {/* Connection Line */}
            <div className="w-12 h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 hidden md:block"></div>
            
            {/* Quantum Icon */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3 border border-primary/20">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Quantum</span>
            </div>
            
            {/* Connection Line */}
            <div className="w-12 h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 hidden md:block"></div>
            
            {/* Biotechnology Icon */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3 border border-primary/20">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Biotechnology</span>
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-12 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-8 right-1/4 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}