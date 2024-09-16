'use client';

import {
  Home,
  PlusCircle,
  UserCircle,
  Search,
  MessageCircle,
  ArrowUp,
  FileText,
  Calendar,
  Plus,
  UserPlus,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchOverlay from '@/CW/SeachOverlay';

interface FloatingActionBarProps {
  isDarkMode: boolean;
  setIsChatOpen: (value: boolean) => void;
}

const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ isDarkMode, setIsChatOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Static data (to be replaced with API calls in the future)
  const searchOverlayData = {
    recentSearches: [
      'Project management',
      'Team collaboration',
      'Task prioritization',
      'Agile methodologies',
      'Remote work best practices',
    ],
    recentPeople: [
      {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Product Manager',
        lastActive: '2 hours ago',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'UX Designer',
        lastActive: '5 minutes ago',
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Software Engineer',
        lastActive: '1 day ago',
      },
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        role: 'Marketing Manager',
        lastActive: '2 days ago',
      },
    ],
    recentFiles: [
      { name: 'Q2 Report.pdf', type: 'PDF', size: '2.3 MB', lastModified: '2 days ago' },
      { name: 'Design Assets.zip', type: 'ZIP', size: '156 MB', lastModified: '1 week ago' },
      { name: 'Meeting Notes.docx', type: 'DOCX', size: '45 KB', lastModified: '3 hours ago' },
    ],
    quickActions: [
      { icon: Plus, label: 'New task' },
      { icon: FileText, label: 'New note' },
      { icon: UserPlus, label: 'Add member' },
      { icon: Calendar, label: 'Schedule meeting' },
      { icon: Star, label: 'Add to favorites' },
    ],
    filterOptions: ['Reactions', 'People', 'Companies', 'Files', 'Tasks'],
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isScrolled ? 'w-auto' : 'w-[calc(100%-2rem)] max-w-2xl'
        } ${isExpanded ? 'h-auto p-4' : 'h-14 px-4 py-2'} ${
          isBottom ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
        } ${isSearchOpen ? 'z-40' : 'z-50'}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isBottom ? (
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-20 right-4 bg-orange-500 rounded-full transition-all duration-300 p-2 hover:bg-orange-600"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </Button>
        ) : (
          <div
            className={`flex items-center justify-between h-full ${isExpanded ? 'flex-col space-y-4' : ''}`}
          >
            <div className={`w-full flex items-center ${isExpanded ? '' : 'justify-between'}`}>
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search..."
                  className={`w-full bg-transparent border-none focus:ring-0 pl-10 ${
                    isDarkMode
                      ? 'placeholder-gray-400 text-white'
                      : 'placeholder-gray-500 text-gray-900'
                  } transition-all duration-300`}
                  onClick={handleSearchClick}
                  readOnly
                />
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 bg-orange-500 rounded-full transition-all duration-300 p-2 hover:bg-orange-600"
                onClick={() => setIsChatOpen(true)}
              >
                <Link href="/chat">
                  <MessageCircle className="h-5 w-5 text-white" />
                </Link>
              </Button>
            </div>
            {isExpanded && (
              <div className="flex justify-around w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Link href="/">
                    <Home className="h-6 w-6" />
                  </Link>
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
                  <Link href="/profile">
                    <UserCircle className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </nav>
      <SearchOverlay
        isDarkMode={isDarkMode}
        onClose={() => setIsSearchOpen(false)}
        isOpen={isSearchOpen}
        data={searchOverlayData}
      />
    </>
  );
};

export default FloatingActionBar;
