'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface StoryCardProps {
  story: {
    title: string;
    creator: string;
    image: string;
    avatar: string;
    width: number;
    height: number;
  };
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-[300px] w-[200px] flex-shrink-0 overflow-hidden shadow-lg">
      <CardContent className="flex h-full flex-col overflow-x-hidden p-0">
        <div className="relative h-[220px] w-full">
          <Image src={story.image} alt={story.title} className="object-cover" fill sizes="200px" />
        </div>
        <div className="flex flex-grow items-center space-x-2 p-3">
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarImage src={story.avatar} alt={`${story.creator}'s avatar`} />
            <AvatarFallback>{story.creator.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-grow overflow-hidden">
            <h3 className="truncate text-sm font-semibold text-gray-800">{story.title}</h3>
            <p className="truncate text-xs text-gray-500">{story.creator}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default StoryCard;
