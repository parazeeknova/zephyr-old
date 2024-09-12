import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Home,
  PlusCircle,
  UserCircle,
  Search,
  MessageCircle,
} from 'lucide-react';

interface BottomNavbarProps {
  isDarkMode: boolean;
  isScrolled: boolean;
  isExpanded: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsExpanded: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setIsChatOpen: (value: boolean) => void;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({
  isDarkMode,
  isScrolled,
  isExpanded,
  setIsExpanded,
  setIsChatOpen,
}) => {
  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? 'w-12 h-12' : 'w-[calc(100%-2rem)] max-w-2xl h-14'
      } ${isExpanded ? 'h-auto p-4' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`flex items-center justify-between h-full ${isExpanded ? 'flex-col space-y-4' : ''}`}
      >
        {!isExpanded && (
          <div className="flex-1 px-4 flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className={`w-full bg-transparent border-none focus:ring-0 ${isDarkMode ? 'placeholder-gray-400 text-white' : 'placeholder-gray-500 text-gray-900'} transition-all duration-300`}
            />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 bg-orange-500 rounded-full transition-all duration-300 hover:bg-orange-600"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-5 w-5 text-white" />
            </Button>
          </div>
        )}
        {isExpanded && (
          <>
            <div className="w-full flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className={`w-full bg-transparent border-none focus:ring-0 ${isDarkMode ? 'placeholder-gray-400 text-white' : 'placeholder-gray-500 text-gray-900'} transition-all duration-300`}
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 bg-orange-500 rounded-full transition-all duration-300 hover:bg-orange-600"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </Button>
            </div>
            <div className="flex justify-around w-full">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Home className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <PlusCircle className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <UserCircle className="h-6 w-6" />
              </Button>
            </div>
          </>
        )}
        {!isExpanded && (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Search className="h-6 w-6" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default BottomNavbar;
