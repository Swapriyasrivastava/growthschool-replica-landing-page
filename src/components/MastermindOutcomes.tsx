
import { Button } from "@/components/ui/button";

const MastermindOutcomes = () => {
  const outcomes = [
    {
      title: "Your Personal AI D2C ASSISTANT That Works 24/7",
      description: "Create Custom GPTs with brand knowledge that automate D2C tasks and boost engagement."
    },
    {
      title: "The NO-CODE AUTOMATION BLUEPRINT That Saves Hours Weekly",
      description: "Use Make.com to automatically post across LinkedIn, Instagram, and Facebook platforms."
    },
    {
      title: "The VISUAL CONTENT MASTERY System:",
      description: "Create stunning product visuals using MidJourney, Runway ML, and Luma Labs (zero design skills)."
    },
    {
      title: "The SET & FORGET Social Media System",
      description: "Build automated posting workflows across platforms while you focus on D2C strategy."
    },
    {
      title: "The ONE-PERSON D2C ARMY Blueprint:",
      description: "Build complete D2C systems using Supabase that normally require multiple specialists."
    },
    {
      title: "The AI TOOL BLACK BOOK (10+ D2C Tools):",
      description: "Master LinkedIn Bot, Flick, Manus, and Bolt AI for D2C automation beyond just ChatGPT."
    },
    {
      title: "The PERFECT PROMPT FORMULA For Guaranteed Results:",
      description: "Master zero-shot, few-shot, and chain of thought techniques for perfect AI results."
    },
    {
      title: "Your Custom 2025 D2C AI ROADMAP",
      description: "Get a personalized plan showing exactly which AI tools to implement for YOUR D2C brand."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          By the end of this Mastermind, you'll have:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300">
              <h3 className="text-orange-400 text-lg font-bold mb-3 leading-tight">
                {outcome.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25 font-semibold mb-4">
            Register now @ ₹499 ₹1999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MastermindOutcomes;
