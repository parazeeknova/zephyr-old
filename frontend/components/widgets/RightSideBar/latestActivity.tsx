'use client';

import { MoreHorizontal } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ActivityItem {
  type: 'like' | 'tag' | 'follow';
  users: string[];
  content?: string;
  time: string;
}

interface LatestActivityProps {
  isDarkMode: boolean;
  activities: ActivityItem[];
}

const LatestActivity: React.FC<LatestActivityProps> = ({ isDarkMode, activities }) => {
  return (
    <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Latest Activity
          </h3>
          <MoreHorizontal className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-64">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {activity.time}
                  </p>
                  {activity.content && (
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {activity.content}
                    </p>
                  )}
                  {activity.type === 'follow' && (
                    <div className="flex justify-between items-center mt-2">
                      <Button
                        variant={isDarkMode ? 'outline' : 'secondary'}
                        size="sm"
                        className={
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }
                      >
                        Discard
                      </Button>
                      <Button
                        size="sm"
                        className={
                          isDarkMode
                            ? 'bg-orange-600 text-gray-200 hover:bg-orange-700'
                            : 'bg-orange-500 text-gray-200 hover:bg-orange-600'
                        }
                      >
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
