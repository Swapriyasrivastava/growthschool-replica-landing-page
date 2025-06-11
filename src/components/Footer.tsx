
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-3xl font-bold text-white mb-2">₹499 <span className="text-gray-500 line-through">₹1999</span></div>
            <div className="text-gray-400 text-sm flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              Deadline June 11, 2025
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg shadow-orange-500/25">
            Register now
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
