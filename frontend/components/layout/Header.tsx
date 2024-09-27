'use client';

import {
  Home,
  MessageSquare,
  Bell,
  GlobeIcon,
  UsersRoundIcon,
  CalendarIcon,
  Bookmark,
  HomeIcon,
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
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-background px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="hidden space-x-4 md:flex">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full bg-muted" title="Home">
                <HomeIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="rounded-full bg-muted" title="Discover">
              <GlobeIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-muted"
              title="Communities"
            >
              <UsersRoundIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-muted" title="Events">
              <CalendarIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Link href="/">
          <h1 className="flex-grow text-center text-2xl font-bold">
            <Cover className="text-primary">Zephyr.</Cover>
          </h1>
        </Link>

        <div className="hidden items-center space-x-4 md:flex">
          <UserButton />
          <Button variant="ghost" size="icon" className="rounded-full bg-muted" title="Bookmarks">
            <Link href="/bookmarks">
              <Bookmark className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-muted" title="Chat">
            <Link href="/chat">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleNotification}
            className="rounded-full bg-muted"
            title="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background py-2 md:hidden">
        <div className="flex items-center justify-around">
          <Link href="/" className="flex flex-col items-center">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/bookmarks" className="flex flex-col items-center">
            <Bookmark className="h-5 w-5" />
            <span className="text-xs">Bookmarks</span>
          </Link>
          <Link href="/chat" className="flex flex-col items-center">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs">Chat</span>
          </Link>
          <button onClick={toggleNotification} className="flex flex-col items-center">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Notifications</span>
          </button>
          <div className="flex flex-col items-center">
            <UserButton />
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </nav>

      <Notification isOpen={isNotificationOpen} onClose={toggleNotification} />
    </>
  );
};

export default Header;
