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
      className="flex h-screen bg-background"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Side icons */}
      <div
        className={`flex flex-col items-center bg-muted py-4 ${
          isExpanded ? 'w-16' : 'w-14'
        } transition-all duration-300`}
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
                    variant={activeSection === section ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setActiveSection(section)}
                    className="mb-4"
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
          className={`flex-1 overflow-hidden ${
            isExpanded ? 'w-80' : 'w-0'
          } transition-all duration-300`}
        >
          <div className="flex h-full flex-col bg-background p-3">
            {/* User profile section */}
            {isExpanded && (
              <div className="mb-4 flex items-center space-x-3 rounded-lg bg-card p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {user.initials}
                </div>
                <div className="overflow-hidden">
                  <h3 className="truncate font-semibold text-foreground">{user.name}</h3>
                  <p className="truncate text-sm text-muted-foreground">{user.status}</p>
                </div>
              </div>
            )}

            {/* Search input */}
            {isExpanded && (
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            )}

            {/* Content section */}
            {isExpanded && (
              <ScrollArea className="w-full flex-1 pr-1">
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
                          className={`m-1 flex cursor-pointer items-center space-x-3 overflow-hidden rounded-xl border p-2 ${
                            activeChat === chat.id
                              ? 'border-primary bg-accent'
                              : 'border-border hover:bg-accent'
                          }`}
                          onClick={() => setActiveChat(chat.id)}
                        >
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-muted"></div>
                          <div className="min-w-0 flex-1">
                            <h3 className="truncate font-semibold text-foreground">{chat.name}</h3>
                            <p className="truncate text-sm text-muted-foreground">
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
                          className="cursor-pointer truncate rounded-lg bg-muted p-2 text-foreground hover:bg-accent"
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
