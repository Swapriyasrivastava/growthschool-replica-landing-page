
const ScheduleSection = () => {
  const schedule = [
    {
      date: "19TH JUNE",
      day: "DAY 1 - 7PM - 9PM IST",
      session: "Session 1",
      title: "Orientation & Program Flow Overview",
      topics: [
        "Access to LMS, tools, and AI workspaces",
        "Tools to download/setup: Notion, ChatGPT, Claude, Midjourney, Runway, Make.com, etc.",
        "Walkthrough of templates, Notion workspaces, and session formats",
        "Code of conduct and support access"
      ],
      outcomes: []
    },
    {
      date: "21ST JUNE", 
      day: "DAY 3 - 10AM - 2PM IST",
      session: "Session 3",
      title: "Custom AI Bots, Smart Decks & The Future of AI Agents",
      topics: [
        "Stimulate AI outputs using prompts vs traditional coding",
        "Unlock growth, efficiency, and innovation across teams"
      ],
      outcomes: [
        "Master AI fundamentals from basic concepts to advanced applications",
        "Build your AI toolkit for immediate D2C implementation", 
        "Transition from traditional coding to natural language prompting",
        "Understand cost-effective AI strategies for D2C brands"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Here's the 4 Day Schedule?
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-4xl mx-auto">
          Designed and taught by top AI experts, you'll master the essential concepts, proven strategies, 
          and tools to build and scale your D2C brand with AI
        </p>
        
        {/* Timeline dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700"></div>
            
            {schedule.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 inline-block">
                      {item.date}
                    </div>
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">{item.day}</h3>
                    <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                      <h4 className="text-orange-400 text-lg font-medium mb-2">{item.session}</h4>
                      <h5 className="text-white text-xl font-bold mb-4">{item.title}</h5>
                      <div className="text-gray-300">
                        <p className="font-medium mb-2">Topics:</p>
                        <ul className="space-y-1 text-sm">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                        {item.outcomes.length > 0 && (
                          <>
                            <p className="font-medium mb-2 mt-4">Outcomes:</p>
                            <ul className="space-y-1 text-sm">
                              {item.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
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
