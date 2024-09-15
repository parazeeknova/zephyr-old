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
  isDarkMode: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, isDarkMode }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card
      className={`w-[200px] h-[300px] flex-shrink-0 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg overflow-hidden`}
    >
      <CardContent className="p-0 flex flex-col h-full overflow-x-hidden">
        <div className="relative w-full h-[220px]">
          <Image src={story.image} alt={story.title} className="object-cover" fill sizes="200px" />
        </div>
        <div className="p-3 flex items-center space-x-2 flex-grow">
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage src={story.avatar} alt={`${story.creator}'s avatar`} />
            <AvatarFallback>{story.creator.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="overflow-hidden flex-grow">
            <h3
              className={`font-semibold text-sm truncate ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
            >
              {story.title}
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
              {story.creator}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default StoryCard;
