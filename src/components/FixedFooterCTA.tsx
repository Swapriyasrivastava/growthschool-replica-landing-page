
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const FixedFooterCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-2xl font-bold text-white mb-1">
              ₹499 <span className="text-gray-500 line-through text-lg">₹1999</span>
            </div>
            <div className="text-gray-400 text-sm flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Deadline June 11, 2025
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg shadow-orange-500/25 font-semibold">
            Register now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedFooterCTA;
