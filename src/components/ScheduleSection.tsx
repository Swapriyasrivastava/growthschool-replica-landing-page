
const ScheduleSection = () => {
  const scheduleItems = [
    {
      day: "Day 1",
      title: "AI Foundation & D2C Strategy",
      description: "Master AI fundamentals and create your D2C automation roadmap"
    },
    {
      day: "Day 2", 
      title: "Content Creation & Visual Mastery",
      description: "Learn MidJourney, Runway ML, and automated content systems"
    },
    {
      day: "Day 3",
      title: "Marketing Automation & Social Media",
      description: "Build end-to-end marketing funnels with AI-powered tools"
    },
    {
      day: "Day 4",
      title: "Advanced Implementation & Launch",
      description: "Deploy your complete AI D2C system and go live"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          4-Day AI Masterclass Schedule
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-500"></div>
            
            {scheduleItems.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Animated circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.day}</span>
                    </div>
                  </div>
                  {/* Ping animation */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-ping opacity-20"></div>
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-colors">
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
