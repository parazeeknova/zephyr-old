'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import React, { useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

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
}) => {
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

  return (
    <div className="w-80 border-r p-3 flex flex-col h-screen ">
      {/* User profile section */}
      <div className="flex items-center space-x-3 mb-4 p-2 bg-white rounded-lg">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          {user.initials}
        </div>
        <div className="overflow-hidden">
          <h3 className="font-semibold truncate">{user.name}</h3>
          <p className="text-sm text-gray-500 truncate">{user.status}</p>
        </div>
      </div>

      {/* Search input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between mb-4">
        {['personal', 'chats', 'team'].map((section) => (
          <motion.div
            key={section}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="flex-1 mx-1"
          >
            <Button
              onClick={() => setActiveSection(section)}
              variant={activeSection === section ? 'default' : 'outline'}
              className="w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Content section with animation */}
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
          className="flex-1 overflow-hidden"
        >
          <ScrollArea className="h-full bg-white w-full pr-1">
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
                      className={`flex items-center space-x-3 p-2 m-1  border rounded-xl cursor-pointer overflow-hidden ${
                        activeChat === chat.id ? 'bg-orange-100' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveChat(chat.id)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{chat.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                      </div>
                    </motion.li>
                  ))
                : sections[activeSection]?.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      custom={index}
                      className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 truncate"
                      onClick={() => console.log(`Clicked on ${item}`)}
                    >
                      {item}
                    </motion.li>
                  ))}
            </motion.ul>
          </ScrollArea>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
