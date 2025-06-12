
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Learn Everything you need to automate, scale, and dominate your D2C market
          </p>
          
          {/* Mentor showcase card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-[1px] rounded-2xl">
              <div className="bg-black rounded-2xl p-6">
                <h3 className="text-white text-xl mb-4">D2C AI Mastermind</h3>
                <img 
                  src="https://go.growthschool.io/images/d2cmm.webp" 
                  alt="D2C AI Mastermind Mentors" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Centered registration section */}
          <div className="text-center">
            <span className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-white text-sm mb-4 block">
              4-Day Mastermind: June 19th-22nd
            </span>
            <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25">
              Register now @ ₹499 ₹1999
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
