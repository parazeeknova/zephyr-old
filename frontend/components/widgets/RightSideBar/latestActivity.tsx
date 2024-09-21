'use client';

import { MoreHorizontal } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ActivityItem {
  type: 'like' | 'tag' | 'follow';
  users: string[];
  content?: string;
  time: string;
}

interface LatestActivityProps {
  activities: ActivityItem[];
}

const LatestActivity: React.FC<LatestActivityProps> = ({ activities }) => {
  return (
    <Card className={`bg-white shadow-sm`}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-sm font-semibold uppercase text-gray-500`}>
            Latest Activity
          </CardTitle>
          <MoreHorizontal className={`h-5 w-5 text-gray-400`} />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-64">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/user-boy-default.png" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className={`text-sm text-gray-700`}>
                    {activity.type === 'like' && (
                      <>
                        <span className="font-medium">{activity.users.join(', ')}</span>{' '}
                        {activity.users.length > 1
                          ? 'liked your post'
                          : 'and others liked your post'}
                      </>
                    )}
                    {activity.type === 'tag' && (
                      <>
                        <span className="font-medium">{activity.users[0]}</span> tagged you in a
                        post
                      </>
                    )}
                    {activity.type === 'follow' && (
                      <>
                        <span className="font-medium">{activity.users[0]}</span> started following
                        you
                      </>
                    )}
                  </p>
                  <p className={`text-xs text-gray-400`}>{activity.time}</p>
                  {activity.content && (
                    <p className={`mt-1 text-sm text-gray-600`}>{activity.content}</p>
                  )}
                  {activity.type === 'follow' && (
                    <div className="mt-2 flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className={
                          'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-800'
                        }
                      >
                        Discard
                      </Button>
                      <Button size="sm" className={'bg-orange-500 text-white hover:bg-orange-600'}>
                        Follow Back
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LatestActivity;
