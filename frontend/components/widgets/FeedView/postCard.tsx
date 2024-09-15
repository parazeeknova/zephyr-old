'use client';

import { motion } from 'framer-motion';
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark, Flame } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  };
  isDarkMode: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, isDarkMode }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = (value: number) => {
    setVotes((prev) => prev + value);
  };

  const isFullWidth = post.images.length >= 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={isFullWidth ? 'w-full' : 'w-full md:w-1/2'}
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
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {post.time}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div
            className={`mb-2 text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}
          >
            <Flame className="w-5 h-5 mr-1 text-orange-500" />
            {votes > 0 ? `+${votes}` : votes}
          </div>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{post.content}</p>
          <div className={`grid ${isFullWidth ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mb-4`}>
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
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote(1)}
              className={isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-200' : ''}
            >
              <ArrowBigUp className="w-5 h-5 mr-1" />
              Upvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote(-1)}
              className={isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-gray-200' : ''}
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
