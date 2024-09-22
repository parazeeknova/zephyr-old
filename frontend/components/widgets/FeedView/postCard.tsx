'use client';

import { motion } from 'framer-motion';
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2, Bookmark, Flame } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import UserAvatar from '@/C/UserAvatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PostData } from '@/lib/types';
import { formatRelativeDate } from '@/lib/utils';

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [voteStatus, setVoteStatus] = useState<'up' | 'down' | null>(null);
  const [auraCount, setAuraCount] = useState(post.aura || 0);

  const handleVote = (value: 'up' | 'down') => {
    setVoteStatus((prevStatus) => {
      if (prevStatus === value) {
        // If clicking the same button, remove the aura
        setAuraCount(post.aura || 0);
        return null;
      } else {
        // If changing vote or voting for the first time
        setAuraCount((post.aura || 0) + (value === 'up' ? 1 : -1));
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
      <Card className="mb-8 h-full bg-card shadow-md">
        <CardContent className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href={`/users/${post.user.username}`}>
                <UserAvatar avatarUrl={post.user.avatarUrl} />
              </Link>
              <div>
                <Link href={`/users/${post.user.username}`}>
                  <h3 className="font-semibold text-foreground">{post.user.displayName}</h3>
                </Link>
                <Link href={`/posts/${post.id}`}>
                  <p className="text-sm text-muted-foreground">
                    {formatRelativeDate(post.createdAt)}
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="mb-2 flex items-center text-lg font-semibold text-foreground">
                  <Flame className="mr-1 h-5 w-5 text-orange-500" />
                  {auraCount}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Aura</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="mb-4 text-foreground">{post.content}</p>
          {post.images && post.images.length > 0 && (
            <div
              className={`mb-4 grid gap-4 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
            >
              {post.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Post image ${index + 1}`}
                  className="h-auto w-full rounded-lg object-cover"
                  width={1080}
                  height={1080}
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
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-muted-foreground hover:text-blue-600 dark:hover:text-blue-300'
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
                  ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                  : 'text-muted-foreground hover:text-red-600 dark:hover:text-red-300'
              }`}
            >
              <ArrowBigDown className="mr-1 h-5 w-5" />
              Downvote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <MessageSquare className="mr-1 h-5 w-5" />
              {post.comments?.length || 0}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
