import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, PlusCircle, UserCircle, Search } from "lucide-react";

const BottomNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? 'w-12 h-12' : 'w-[calc(100%-2rem)] max-w-2xl h-14'
      } ${isExpanded ? 'h-auto p-4' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`flex items-center justify-between h-full ${isExpanded ? 'flex-col space-y-4' : ''}`}>
        {!isExpanded && (
          <div className="flex-1 px-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-400"
            />
          </div>
        )}
        {isExpanded && (
          <>
            <div className="w-full">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex justify-around w-full">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Home className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <PlusCircle className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6" />
              </Button>
            </div>
          </>
        )}
        {!isExpanded && (
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-6 w-6" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default BottomNavbar;
