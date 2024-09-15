'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageSquare, Bell, Sun, Moon, Settings, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import FileNotification from '@/CW/Header/fileNotification';
import OptionNotification from '@/CW/Header/optionNotification';
import PlainNotification from '@/CW/Header/plainNotification';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'inbox' | 'following' | 'archived'>('inbox');

  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  const renderNotificationContent = () => {
    switch (activeTab) {
      case 'inbox':
        return (
          <>
            <OptionNotification
              avatarInitial="D"
              avatarColor="bg-orange-500"
              userName="Dylan"
              action="has requested to edit the file"
              fileName="Astro Illustration"
              timeAgo="20 hours ago"
              project="AstroClash UI Kit"
            />
            <FileNotification
              avatarInitial="M"
              avatarColor="bg-blue-500"
              userName="Marina Niki"
              action="edited"
              fileName="Earthfund - Master"
              timeAgo="21 hours ago"
              project="AstroClash UI Kit"
              imageUrl="/Banner.png?height=200&width=200&text=Thinking+Components"
              description="Everything you need to make a difference. Join the EarthFund community and help us decentralize the way we tackle humanity's biggest problems."
              linkUrl="earthfund.io/technology/donate..."
            />
            <PlainNotification
              avatarInitial="D"
              avatarColor="bg-orange-500"
              userName="Dylan"
              action="has sent a message."
              message="Hi my friend how are you"
              timeAgo="20 hours ago"
              project="AstroClash UI Kit"
            />
          </>
        );
      case 'following':
        return (
          <PlainNotification
            avatarInitial="D"
            avatarColor="bg-orange-500"
            userName="Dylan"
            action="has sent a message."
            message="Hi my friend how are you"
            timeAgo="20 hours ago"
            project="AstroClash UI Kit"
          />
        );
      case 'archived':
        return (
          <FileNotification
            avatarInitial="M"
            avatarColor="bg-blue-500"
            userName="Marina Niki"
            action="edited"
            fileName="Earthfund - Master"
            timeAgo="21 hours ago"
            project="AstroClash UI Kit"
            imageUrl="/placeholderIII.jpg?height=200&width=200&text=Thinking+Components"
            description="Everything you need to make a difference. Join the EarthFund community and help us decentralize the way we tackle humanity's biggest problems."
            linkUrl="earthfund.io/technology/donate..."
          />
        );
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-10 flex items-center justify-between px-4 py-2 ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-b`}
      >
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-500">Zephyr.</h1>
          </Link>
          <Button variant="ghost" size="icon">
            <Link href="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleNotification}>
            <Bell className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-medium">Parazeeknova</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}
            >
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <AnimatePresence>
        {isNotificationOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed right-4 top-16 w-96 ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            } shadow-lg z-50 overflow-hidden rounded-lg border ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold uppercase text-gray-500">Notifications</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-orange-500 text-gray-200 hover:text-orange-500 text-xs font-semibold"
                >
                  Mark all as read
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleNotification}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex border-b border-gray-200 text-sm">
              <Button
                variant="ghost"
                className={`flex-1 py-2 px-4 font-semibold ${
                  activeTab === 'inbox'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('inbox')}
              >
                Inbox{' '}
                <span className="ml-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-semibold">
                  8
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 py-2 px-4 font-semibold ${
                  activeTab === 'following'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('following')}
              >
                Following{' '}
                <span className="ml-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-semibold">
                  24
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 py-2 px-4 font-semibold ${
                  activeTab === 'archived'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('archived')}
              >
                Archived
              </Button>
            </div>
            <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {renderNotificationContent()}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full text-sm text-gray-600 font-semibold hover:text-gray-300"
              >
                View all notifications
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
