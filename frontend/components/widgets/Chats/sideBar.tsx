'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, Users, User } from 'lucide-react';
import React, { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
}

interface SidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  page: number;
  direction: number;
  filteredChats: Chat[];
  activeChat: string;
  setActiveChat: (chatId: string) => void;
  sections: Record<string, string[]>;
  user: { name: string; initials: string; status: string };
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  searchTerm,
  setSearchTerm,
  activeSection,
  setActiveSection,
  page,
  direction,
  filteredChats,
  activeChat,
  setActiveChat,
  sections,
  user,
  isDarkMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sidebarVariants = useMemo(
    () => ({
      enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (direction: number) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 }),
    }),
    [],
  );

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const sectionIcons = {
    chats: <MessageSquare size={24} />,
    team: <Users size={24} />,
    personal: <User size={24} />,
  };

  return (
    <div
      className={`flex h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Side icons */}
      <div
        className={`flex flex-col items-center py-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} ${isExpanded ? 'w-16' : 'w-14'} transition-all duration-300`}
      >
        <TooltipProvider>
          {Object.entries(sectionIcons).map(([section, icon]) => (
            <Tooltip key={section}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveSection(section)}
                    className={`mb-4 ${activeSection === section ? 'bg-orange-500 text-white' : ''}`}
                  >
                    {icon}
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      {/* Main content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={sidebarVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`flex-1 overflow-hidden ${isExpanded ? 'w-80' : 'w-0'} transition-all duration-300`}
        >
          <div className={`h-full flex flex-col p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {/* User profile section */}
            {isExpanded && (
              <div
                className={`flex items-center space-x-3 mb-4 p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.initials}
                </div>
                <div className="overflow-hidden">
                  <h3
                    className={`font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    {user.name}
                  </h3>
                  <p
                    className={`text-sm truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
                  >
                    {user.status}
                  </p>
                </div>
              </div>
            )}

            {/* Search input */}
            {isExpanded && (
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            )}

            {/* Content section */}
            {isExpanded && (
              <ScrollArea
                className={`flex-1 w-full pr-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <motion.ul
                  className="space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {activeSection === 'chats'
                    ? filteredChats.map((chat, index) => (
                        <motion.li
                          key={chat.id}
                          variants={listItemVariants}
                          custom={index}
                          className={`flex items-center space-x-3 p-2 m-1 border rounded-xl cursor-pointer overflow-hidden ${
                            activeChat === chat.id
                              ? isDarkMode
                                ? 'bg-gray-700 border-gray-600'
                                : 'bg-orange-100 border-orange-200'
                              : isDarkMode
                                ? 'hover:bg-gray-700 border-gray-700'
                                : 'hover:bg-gray-100 border-gray-200'
                          }`}
                          onClick={() => setActiveChat(chat.id)}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex-shrink-0 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
                          ></div>
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                            >
                              {chat.name}
                            </h3>
                            <p
                              className={`text-sm truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
                            >
                              {chat.lastMessage}
                            </p>
                          </div>
                        </motion.li>
                      ))
                    : sections[activeSection]?.map((item, index) => (
                        <motion.li
                          key={index}
                          variants={listItemVariants}
                          custom={index}
                          className={`p-2 rounded-lg cursor-pointer truncate ${
                            isDarkMode
                              ? 'bg-gray-700 hover:bg-gray-600 text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          }`}
                          onClick={() => console.log(`Clicked on ${item}`)}
                        >
                          {item}
                        </motion.li>
                      ))}
                </motion.ul>
              </ScrollArea>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
