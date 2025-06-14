export default function AboutSection() {
  const stats = [
    { value: "250+", label: "Clients Served" },
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "15+", label: "Years of Experience" },
    { value: "50+", label: "Expert Team Members" }
  ];



  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6">
              Leading Corporate Crypto Tax & Web 3 Innovation
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Celestia Holdings, we specialize in corporate cryptocurrency tax compliance and comprehensive Web 3 project development. Our expert team navigates complex digital asset regulations while building cutting-edge blockchain solutions for forward-thinking businesses.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From DeFi transaction analysis to smart contract development, we provide the specialized expertise corporations need to thrive in the decentralized economy while maintaining full regulatory compliance.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting discussing financial strategies in modern office" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
        </div>


      </div>
    </section>
  );
}
