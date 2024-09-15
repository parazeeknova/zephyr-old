'use client';

import { motion } from 'framer-motion';
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark, Flame } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PostCardProps {
  post: {
    author: string;
    avatar: string;
    time: string;
    content: string;
    images: string[];
    width: number;
    height: number;
    comments: number;
    shares: number;
    tags: string[];
    aura: number;
  };
  isDarkMode: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isDarkMode }) => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [auraCount, setAuraCount] = useState(post.aura);

  const handleVote = (value: 'up' | 'down') => {
    setVoteStatus((prevStatus) => {
      if (prevStatus === value) {
        // If clicking the same button, remove the aura
        setAuraCount(post.aura);
        return null;
      } else {
        // If changing vote or voting for the first time
        setAuraCount(post.aura + (value === 'up' ? 1 : -1));
        return value;
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8 h-full`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={post.avatar} alt={`${post.author}'s avatar`} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {post.author}
                </h3>
                <div className="flex flex-wrap gap-1 mt-1 mb-1">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : ''}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {post.time}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className={isDarkMode ? 'text-gray-300 hover:text-gray-100' : ''}
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={isDarkMode ? 'text-gray-300 hover:text-gray-100' : ''}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`mb-2 text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}
                >
                  <Flame className="w-5 h-5 mr-1 text-orange-500" />
                  {auraCount}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Aura</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{post.content}</p>
          {post.images.length > 0 && (
            <div
              className={`grid gap-4 mb-4 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
            >
              {post.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                  width={post.width}
                  height={post.height}
                  unoptimized={img.endsWith('.gif')}
                />
              ))}
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote('up')}
              className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-200' : ''} ${voteStatus === 'up' ? 'bg-blue-100 text-blue-600' : ''}`}
            >
              <ArrowBigUp className="w-5 h-5 mr-1" />
              Upvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote('down')}
              className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-200' : ''} ${voteStatus === 'down' ? 'bg-red-100 text-red-600' : ''}`}
            >
              <ArrowBigDown className="w-5 h-5 mr-1" />
              Downvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-200' : ''}
            >
              <MessageSquare className="w-5 h-5 mr-1" />
              {post.comments}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
