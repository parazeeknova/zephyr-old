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
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
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
