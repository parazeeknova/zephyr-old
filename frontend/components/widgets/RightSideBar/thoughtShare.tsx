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
  <Card className="bg-card shadow-md">
    <CardContent className="p-4">
      <h3 className="mb-2 font-semibold text-foreground">What do you think, {username}?</h3>
      <Textarea
        placeholder="Share your thoughts..."
        className="mb-2 bg-muted text-foreground placeholder-muted-foreground"
      />
      <div className="mb-2 grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" className="flex items-center justify-center">
          <ImageIcon className="mr-2 h-4 w-4" />
          Fleet
        </Button>
        <Button variant="outline" size="sm" className="flex items-center justify-center">
          <Video className="mr-2 h-4 w-4" />
          Blog
        </Button>
      </div>
      <Button variant="outline" size="sm" className="flex w-full items-center justify-center">
        <Cast className="mr-2 h-4 w-4" />
        Research
      </Button>
    </CardContent>
  </Card>
);

export default ThoughtShare;
