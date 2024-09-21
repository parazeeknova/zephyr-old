'use client';

import { ImageIcon, Video, Cast } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface ThoughtShareProps {
  username: string;
}

const ThoughtShare: React.FC<ThoughtShareProps> = ({ username }) => (
  <Card className={`bg-white shadow-md`}>
    <CardContent className="p-4">
      <h3 className={`mb-2 font-semibold text-gray-900`}>What do you think, {username}?</h3>
      <Textarea
        placeholder="Share your thoughts..."
        className={`mb-2 bg-gray-100 text-gray-900 placeholder-gray-500`}
      />
      <div className="mb-2 grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300`}
        >
          <ImageIcon className="mr-2 h-4 w-4" />
          Fleet
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={`flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300`}
        >
          <Video className="mr-2 h-4 w-4" />
          Blog
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        className={`flex w-full items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300`}
      >
        <Cast className="mr-2 h-4 w-4" />
        Research
      </Button>
    </CardContent>
  </Card>
);

export default ThoughtShare;
