
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const mentors = [
    { name: "Priyanka Sarmah", role: "Visual Art Director", company: "Samur AI" },
    { name: "Manish Kumar", role: "Founder", company: "GrowthStack" },
    { name: "Divij Bajaj", role: "Data Scientist", company: "Microsoft" },
    { name: "Siddharth", role: "Head Of Product", company: "GrowthSchool" },
    { name: "KVS Dileep", role: "Head Of AI Initiatives", company: "GrowthSchool" }
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center pt-16 pb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            4 Day AI Masterclass for
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              D2C Founders
            </span>
          </h1>
          
          <div className="flex justify-center space-x-6 mb-8">
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              LIVE
            </span>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              22 hours
            </span>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
              20+ AI tools
            </span>
          </div>
          
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
          
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="text-left">
              <div className="text-3xl font-bold text-white mb-2">₹499 <span className="text-gray-500 line-through">₹1999</span></div>
              <div className="text-gray-400 text-sm flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                Deadline June 11, 2025
              </div>
            </div>
            
            <div className="text-center">
              <span className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-white text-sm mb-4 block">
                4-Day Mastermind: June 19th-22nd
              </span>
              <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-orange-500/25">
                Register now @ ₹499 ₹1999
              </Button>
            </div>
            
            <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg shadow-orange-500/25">
              Register now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
