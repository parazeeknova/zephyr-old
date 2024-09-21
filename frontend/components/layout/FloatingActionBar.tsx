'use client';

import {
  Home,
  PlusCircle,
  UserCircle,
  Search,
  MessageCircle,
  FileText,
  Calendar,
  Plus,
  UserPlus,
  Star,
  SearchSlashIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ScrollUpButton from '@/CW/ScrollUpButton';
import SearchOverlay from '@/CW/SeachOverlay';

interface FloatingActionBarProps {
  setIsChatOpen: (value: boolean) => void;
}

const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ setIsChatOpen }) => {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchOverlayData = {
    recentSearches: ['Project management', 'Task prioritization', 'Agile methodologies'],
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isScrolled ? 'w-auto' : 'w-[calc(100%-2rem)] max-w-2xl'
        } ${isExpanded ? 'h-auto p-4' : 'h-14 px-4 py-2'} ${isSearchOpen ? 'z-40' : 'z-50'}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div
          className={`flex h-full items-center justify-between ${isExpanded ? 'flex-col space-y-4' : ''}`}
        >
          <div className={`flex w-full items-center ${isExpanded ? '' : 'justify-between'}`}>
            <div className="relative w-full">
              <form onSubmit={handleSubmit} method="GET" action="/search">
                <Input
                  type="search"
                  name="q"
                  placeholder="Search..."
                  className="w-full border-none bg-transparent pl-10 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-0"
                />
              </form>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full bg-orange-500 p-2 transition-all duration-300 hover:bg-orange-600"
              onClick={() => setIsChatOpen(true)}
            >
              <Link href="/chat">
                <MessageCircle className="h-5 w-5 text-white" />
              </Link>
            </Button>
          </div>
          {isExpanded && (
            <div className="flex w-full justify-around">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200"
              >
                <Link href="/">
                  <Home className="h-6 w-6" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full transition-all duration-300 hover:bg-gray-200"
                onClick={() => setIsSearchOpen(true)}
              >
                <SearchSlashIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200"
              >
                <PlusCircle className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200"
              >
                <Link href="/profile">
                  <UserCircle className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
      <ScrollUpButton isVisible={isScrolled} />
      <SearchOverlay
        onClose={() => setIsSearchOpen(false)}
        isOpen={isSearchOpen}
        data={searchOverlayData}
      />
    </>
  );
};

export default FloatingActionBar;
