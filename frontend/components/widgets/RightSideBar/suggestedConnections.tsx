'use client';

import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Connection {
  name: string;
  profession: string;
  avatarSrc: string;
}

interface SuggestedConnectionsProps {
  isDarkMode: boolean;
  connections: Connection[];
}

const SuggestedConnections: React.FC<SuggestedConnectionsProps> = ({ isDarkMode, connections }) => (
  <Card className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}>
    <CardHeader>
      <CardTitle>Suggested Connections</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {connections.map((connection, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={connection.avatarSrc} alt={`${connection.name}'s avatar`} />
                <AvatarFallback>
                  {connection.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{connection.name}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {connection.profession}
                </p>
              </div>
            </div>
            <Button size="sm">Connect</Button>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default SuggestedConnections;
