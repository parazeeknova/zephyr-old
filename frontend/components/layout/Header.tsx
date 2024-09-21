'use client';

import {
  Home,
  MessageSquare,
  Bell,
  GlobeIcon,
  User2Icon,
  UsersRoundIcon,
  CalendarIcon,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import Notification from '@/CL/Notification';
import { Button } from '@/components/ui/button';
import { Cover } from '@/components/ui/cover';

import UserButton from '../UserButton';

const Header: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              <Cover className="text-orange-500">Zephyr.</Cover>
            </h1>
          </Link>
          <Button variant="ghost" size="sm" className="rounded-md bg-gray-100 pb-5 pt-5">
            <Home className="mr-2 h-4 w-4" />
            <p className="text-sm font-semibold">Home</p>
          </Button>
        </div>
        <div className="flex rounded-md bg-gray-100 p-1">
          <Button variant="ghost" size="sm" className="rounded-full">
            <GlobeIcon className="mr-2 h-4 w-4" />
            Discover
          </Button>

          <Button variant="ghost" size="sm" className="rounded-full">
            <User2Icon className="mr-2 h-4 w-4" />
            Community feed
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <UsersRoundIcon className="mr-2 h-4 w-4" />
            Followed Communities
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Events
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <UserButton />
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
        </div>
      </header>
      <Notification isOpen={isNotificationOpen} onClose={toggleNotification} />
    </>
  );
};

export default Header;
