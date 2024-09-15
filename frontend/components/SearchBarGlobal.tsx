'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, PlusCircle, UserCircle, Search, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarGlobalProps {
  isDarkMode: boolean;
  isScrolled: boolean;
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
  setIsChatOpen: (value: boolean) => void;
}

const SearchBarGlobal: React.FC<SearchBarGlobalProps> = ({
  isDarkMode,
  isScrolled,
  isExpanded,
  setIsExpanded,
  setIsChatOpen,
}) => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-full shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? 'w-300 h-30' : 'w-[calc(100%-2rem)] max-w-2xl h-14'
      } ${isExpanded ? 'h-auto p-4' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        layout
        className={`flex items-center justify-between h-full ${
          isExpanded ? 'flex-col space-y-4' : ''
        }`}
      >
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 px-1 py-1 flex items-center"
            >
              <Input
                type="search"
                placeholder="Search..."
                className={`w-full bg-transparent border-none focus:ring-0 ${
                  isDarkMode
                    ? 'placeholder-gray-400 text-white'
                    : 'placeholder-gray-500 text-gray-900'
                } transition-all duration-300`}
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 bg-orange-500 rounded-full transition-all duration-300 my-1 mx-0 p-2 hover:bg-orange-600"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full space-y-4"
            >
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search..."
                  className={`w-full bg-transparent border-none focus:ring-0 p-2 ${
                    isDarkMode
                      ? 'placeholder-gray-400 text-white'
                      : 'placeholder-gray-500 text-gray-900'
                  } transition-all duration-300`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 bg-orange-500 rounded-full transition-all duration-300 my-1 mx-0 p-2 hover:bg-orange-600"
                  onClick={() => setIsChatOpen(true)}
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </Button>
              </div>
              <div className="flex justify-around w-full">
                <NavButton href="/" icon={<Home className="h-6 w-6" />} />
                <NavButton icon={<PlusCircle className="h-6 w-6" />} />
                <NavButton icon={<UserCircle className="h-6 w-6" />} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isExpanded && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 pr-2"
              >
                <Search className="h-6 w-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

const NavButton: React.FC<{ href?: string; icon: React.ReactNode }> = ({ href, icon }) => {
  const ButtonContent = (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {icon}
    </Button>
  );

  return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
};

export default SearchBarGlobal;
