
const MarketStatsSection = () => {
  const stats = [
    {
      value: "$300 Bn",
      description: "By 2030, D2C brands are projected to dominate 75% of India's $400 Bn e-commerce market, fueled by AI innovation."
    },
    {
      value: "425 Million", 
      description: "India's online shopping base is set to reach 425 million by 2027, creating massive opportunities for AI-powered D2C businesses."
    },
    {
      value: "$60 Billion",
      description: "The Indian D2C market is expected to soar to $60B by 2027, driven by a 40% growth rate and AI-led strategies are leading this charge."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-1 bg-gradient-to-l from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-96 h-1 bg-gradient-to-l from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-3/4 right-0 w-96 h-1 bg-gradient-to-l from-transparent via-orange-500/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          D2C Market is only GROWING with AI Integration 🚀
        </h2>
        
        <p className="text-gray-300 text-center mb-16 max-w-4xl mx-auto">
          In today's dynamic landscape, traditional retail is being redefined by AI-powered D2C brands 
          that are setting new benchmarks in customer experiences and business growth. Indian D2C 
          brands are witnessing hyper-growth as they embrace AI to streamline operations, create 
          smarter customer journeys, and stay ahead of the curve. Now is the perfect time to be part of 
          this AI-powered D2C revolution.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-colors">
              <h3 className="text-4xl font-bold text-orange-400 mb-4">{stat.value}</h3>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-white text-xl mb-8 max-w-4xl mx-auto">
            So, to help you make the most of this opportunity while 
            building and scaling your AI-powered D2C brand, we've 
            launched this
          </p>
          <h3 className="text-4xl font-bold text-white mb-8">D2C AI Mastermind</h3>
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25">
            Register now @ ₹499 ₹1999
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;
