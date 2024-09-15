'use client';

import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Friend {
  name: string;
  status: 'online' | 'offline' | 'away' | 'busy' | string;
  lastSeen?: string;
}

interface FriendsProps {
  isDarkMode: boolean;
  friends: Friend[];
}

const Friends: React.FC<FriendsProps> = ({ isDarkMode, friends }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent className="p-4">
      {/* ... existing code ... */}
      <ScrollArea className="h-[calc(100vh-620px)] pr-4">
        <ul className="space-y-3">
          {friends.map((friend, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`https://i.pravatar.cc/32?u=${friend.name}`}
                    alt={friend.name}
                  />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span
                  className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {friend.name}
                </span>
              </div>
              {friend.status === 'online' && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
              {friend.status === 'away' && (
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              )}
              {friend.status === 'busy' && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
              {friend.status === 'offline' && (
                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {friend.lastSeen}
                </span>
              )}
            </li>
          ))}
        </ul>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </CardContent>
  </Card>
);

export default Friends;
