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
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
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
      <Card className="mb-8 h-full bg-white shadow-md">
        <CardContent className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={post.avatar} alt={`${post.author}'s avatar`} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-800">{post.author}</h3>
                <div className="mb-1 mt-1 flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-200 text-xs text-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="mb-2 flex items-center text-lg font-semibold text-gray-800">
                  <Flame className="mr-1 h-5 w-5 text-orange-500" />
                  {auraCount}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Aura</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="mb-4 text-gray-700">{post.content}</p>
          {post.images.length > 0 && (
            <div
              className={`mb-4 grid gap-4 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
            >
              {post.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Post image ${index + 1}`}
                  className="h-auto w-full rounded-lg object-cover"
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
              className={`${
                voteStatus === 'up'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <ArrowBigUp className="mr-1 h-5 w-5" />
              Upvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote('down')}
              className={`${
                voteStatus === 'down'
                  ? 'bg-red-100 text-red-600'
                  : 'text-gray-500 hover:text-red-600'
              }`}
            >
              <ArrowBigDown className="mr-1 h-5 w-5" />
              Downvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <MessageSquare className="mr-1 h-5 w-5" />
              {post.comments}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
