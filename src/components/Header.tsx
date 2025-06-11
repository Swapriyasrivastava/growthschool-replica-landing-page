
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://go.growthschool.io/images/newgswhite.svg" 
            alt="Growth School" 
            className="h-8"
          />
          <div className="flex items-center space-x-2 text-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-4 h-4" />
            <span className="text-white">LinkedIn</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Top Startup India</span>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white">
          Register now
        </Button>
      </div>
    </header>
  );
};

export default Header;
