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
  connections: Connection[];
}

const SuggestedConnections: React.FC<SuggestedConnectionsProps> = ({ connections }) => (
  <Card className={`bg-white shadow-md`}>
    <CardHeader>
      <CardTitle className={`text-sm font-semibold uppercase text-gray-500`}>
        Suggested Connections
      </CardTitle>
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
                <p className={`font-medium text-gray-900`}>{connection.name}</p>
                <p className={`text-sm text-gray-500`}>{connection.profession}</p>
              </div>
            </div>
            <Button size="sm" className={`bg-orange-500 text-gray-200 hover:bg-orange-600`}>
              Connect
            </Button>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default SuggestedConnections;
