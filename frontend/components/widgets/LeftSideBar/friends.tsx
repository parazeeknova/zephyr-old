'use client';

import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface Friend {
  name: string;
  status: 'online' | 'offline' | 'away' | 'busy' | string;
  lastSeen?: string;
}

interface FriendsProps {
  friends: Friend[];
}

const Friends: React.FC<FriendsProps> = ({ friends }) => (
  <Card className="bg-white">
    <CardContent className="p-4">
      <CardTitle className="mb-4 text-sm font-semibold uppercase text-gray-500">Friends</CardTitle>
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
                <span className="text-sm font-medium text-gray-700">{friend.name}</span>
              </div>
              {friend.status === 'online' && (
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              )}
              {friend.status === 'away' && (
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              )}
              {friend.status === 'busy' && <div className="h-2 w-2 rounded-full bg-red-500"></div>}
              {friend.status === 'offline' && (
                <span className="text-xs text-gray-400">{friend.lastSeen}</span>
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
