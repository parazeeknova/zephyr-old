'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageSquare, Bell, Sun, Moon, Settings, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Cover } from '@/components/ui/cover';
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
              imageUrl="/Banner.png"
              width={400}
              height={200}
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
        return <p className="text-center text-gray-500">You have no following notifications</p>;
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
            imageUrl="/placeholderIII.jpg"
            width={400}
            height={200}
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
          isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        } border-b`}
      >
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-500">
              <Cover>Zephyr.</Cover>
            </h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
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
                  <AvatarImage src="/useri.jpg" alt="User avatar" />
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
              <Link href="/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
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
            } z-50 overflow-hidden rounded-lg border shadow-lg ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h2 className="text-lg font-semibold uppercase text-gray-500">Notifications</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-orange-500 text-xs font-semibold text-gray-200 hover:text-orange-500"
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
                className={`flex-1 px-4 py-2 font-semibold ${
                  activeTab === 'inbox'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('inbox')}
              >
                Inbox{' '}
                <span className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-semibold text-white">
                  8
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 px-4 py-2 font-semibold ${
                  activeTab === 'following'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('following')}
              >
                Following{' '}
                <span className="ml-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-semibold text-white">
                  24
                </span>
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 px-4 py-2 font-semibold ${
                  activeTab === 'archived'
                    ? 'border-b-2 border-orange-500 text-orange-500'
                    : 'text-gray-400'
                }`}
                onClick={() => setActiveTab('archived')}
              >
                Archived
              </Button>
            </div>
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4">
              {renderNotificationContent()}
            </div>
            <div className="border-t border-gray-200 p-4">
              <Button
                variant="ghost"
                className="w-full text-sm font-semibold text-gray-600 hover:text-gray-300"
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
