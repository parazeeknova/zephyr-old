'use client';

import { Home, MessageSquare, Bell, Settings, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import Notification from '@/CL/Notification';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Cover } from '@/components/ui/cover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-500">
              <Cover>Zephyr.</Cover>
            </h1>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-md bg-gray-100 pb-5 pt-5 hover:bg-gray-100"
            >
              <Home className="mr-2 h-4 w-4" />
              <p className="text-sm font-extrabold text-gray-700">Home</p>
            </Button>
          </Link>
        </div>
        <div className="flex rounded-md bg-gray-100 p-1">
          <Button variant="ghost" size="sm" className="rounded-full">
            Explore
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Community feed
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Blogs
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            Events
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
            <Link href="/chat">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleNotification}
            className="rounded-full bg-gray-100"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
            <Settings className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/useri.jpg" alt="User avatar" />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <span className="font-medium">Parazeeknova</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
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
      <Notification isOpen={isNotificationOpen} onClose={toggleNotification} />
    </>
  );
};

export default Header;
