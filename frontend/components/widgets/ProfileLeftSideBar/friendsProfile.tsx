'use client';

import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface FriendsProps {
  friends: Array<{
    name: string;
    role: string;
    avatar: string;
  }>;
  isDarkMode: boolean;
}

const Friends: React.FC<FriendsProps> = ({ friends, isDarkMode }) => (
  <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-6">
      <h2
        className={`mb-4 text-sm font-semibold uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        My Friends
      </h2>
      <div className="space-y-4">
        {friends.map((friend, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={friend.avatar} alt={friend.name} width={40} height={40} />
              <AvatarFallback>{friend.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{friend.name}</p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {friend.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Friends;
