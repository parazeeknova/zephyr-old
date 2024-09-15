'use client';

import { ImageIcon, Video, Cast } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface ThoughtShareProps {
  isDarkMode: boolean;
  username: string;
}

const ThoughtShare: React.FC<ThoughtShareProps> = ({ isDarkMode, username }) => (
  <Card className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}>
    <CardContent className="p-4">
      <h3 className="font-semibold mb-2">What do you think, {username}?</h3>
      <Textarea
        placeholder="Share your thoughts..."
        className={`mb-2 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'}`}
      />
      <div className="grid grid-cols-2 gap-2 mb-2">
        <Button variant="outline" size="sm" className="flex items-center justify-center">
          <ImageIcon className="w-4 h-4 mr-2" />
          Image
        </Button>
        <Button variant="outline" size="sm" className="flex items-center justify-center">
          <Video className="w-4 h-4 mr-2" />
          Video
        </Button>
      </div>
      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
        <Cast className="w-4 h-4 mr-2" />
        Streaming
      </Button>
    </CardContent>
  </Card>
);

export default ThoughtShare;
