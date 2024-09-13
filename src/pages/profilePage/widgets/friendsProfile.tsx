import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Friends: React.FC = () => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <h2 className="text-lg font-semibold mb-4">My Friends</h2>
      <div className="space-y-4">
        {[
          { name: 'Alice Johnson', role: 'UX Researcher' },
          { name: 'Bob Smith', role: 'UI Designer' },
          { name: 'Carol White', role: 'Product Manager' },
        ].map((friend, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage
                src={`/placeholder.svg?height=32&width=32&text=${friend.name[0]}`}
              />
              <AvatarFallback>{friend.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{friend.name}</p>
              <p className="text-xs text-gray-500">{friend.role}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Friends;
