'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PostCard from '@/CW/FeedView/postCard';
import StoryCard from '@/CW/FeedView/storyCard';
import { PostData } from '@/lib/types';

import PostEditor from '../posts/editor/PostEditor';

const stories = [
  {
    title: 'Thinking Components',
    creator: 'Lena Logic',
    image: '/blogi.png',
    avatar: '/user-boy-default.png',
    width: 200,
    height: 200,
  },
  {
    title: 'Functional Fury',
    creator: 'Beth Binary',
    image: '/blogii.png',
    avatar: '/user-girlaltstyled-default.png',
    width: 200,
    height: 200,
  },
  {
    title: 'React Rendezvous',
    creator: 'Ethan Byte',
    image: '/blogiii.png',
    avatar: '/user-girlstyled-default.png',
    width: 200,
    height: 200,
  },
  {
    title: 'Stateful Symphony',
    creator: 'Beth Binary',
    image: '/blogiv.png',
    avatar: '/user-boystyled-default.png',
    width: 200,
    height: 200,
  },
  {
    title: 'Async Awakenings',
    creator: 'Nina Netcode',
    image: '/blogi.png',
    avatar: '/user-boyalt-default.png',
    width: 200,
    height: 200,
  },
  {
    title: 'The Art of Reusability',
    creator: 'Lena Logic',
    image: '/blogii.png',
    avatar: '/user-girlstyled-default.png',
    width: 200,
    height: 200,
  },
];

interface FeedViewProps {
  posts: PostData[];
}

export const FeedView: React.FC<FeedViewProps> = ({ posts }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scribbles = posts.filter((post) => !post.images || post.images.length === 0);
  const snapshots = posts.filter((post) => post.images && post.images.length > 0);

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="mb-8">
          <PostEditor />
        </div>
        <Card className="mb-8 bg-card shadow-lg">
          <CardContent className="p-4">
            <h2 className="mb-2 text-left text-2xl font-bold uppercase text-foreground">Stories</h2>
            <p className="mb-4 text-muted-foreground">
              Check out the latest stories from your network.
            </p>

            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                ref={scrollRef}
                className={`flex space-x-4 overflow-x-hidden ${isHovering ? 'scrollbar-show' : 'scrollbar-hide'}`}
                onScroll={checkScrollButtons}
                style={{ paddingBottom: '10px' }}
              >
                {stories.map((story, index) => (
                  <StoryCard key={index} story={story} />
                ))}
              </div>
              {showLeftButton && (
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 p-2 shadow-md transition-all duration-200 hover:bg-background/75 focus:outline-none dark:bg-foreground/10 dark:hover:bg-foreground/20"
                >
                  <ChevronLeft className="h-6 w-6 text-foreground" />
                </button>
              )}
              {showRightButton && (
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 p-2 shadow-md transition-all duration-200 hover:bg-background/75 focus:outline-none dark:bg-foreground/10 dark:hover:bg-foreground/20"
                >
                  <ChevronRight className="h-6 w-6 text-foreground" />
                </button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-8" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8 bg-card shadow-lg">
          <CardContent className="p-4">
            <h2 className="mb-2 text-left text-2xl font-bold uppercase text-foreground">
              Scribbles
            </h2>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
              {scribbles.slice(0, 4).map((post) => (
                <div key={post.id} className="h-full">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            {scribbles.length > 4 && (
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold text-foreground">More Scribbles</h3>
                <div className="space-y-4">
                  {scribbles.slice(4).map((post, index) => (
                    <PostCard key={`scribble-extra-${index}`} post={post} />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-8 bg-card shadow-lg">
          <CardContent className="p-4">
            <h2 className="mb-2 text-left text-2xl font-bold uppercase text-foreground">
              Snapshots
            </h2>
            <div className="space-y-8">
              {snapshots.map((post, index) => (
                <PostCard key={`snapshot-${index}`} post={post} />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-8 text-center text-muted-foreground"
      >
        <p>You&apos;ve reached the end of your feed.</p>
        <p>Check back later for more updates!</p>
      </motion.div>
    </main>
  );
};

export default FeedView;
