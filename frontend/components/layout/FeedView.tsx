'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PostCard from '@/CW/FeedView/postCard';
import StoryCard from '@/CW/FeedView/storyCard';

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

const posts = [
  {
    author: 'Raiden Shogun',
    avatar: '/user-girlaltstyled-default.png',
    time: 'just now',
    content:
      'Created some 8bit animations for my favorite games, feel free to check it out my profile for more, i do take commissions! Second is neir and first is some random character #8bit #Animation #Games 🎮🎯',
    images: ['/placeholdergifi.gif', '/placeholdergifii.gif'],
    comments: 0,
    shares: 0,
    width: 800,
    height: 800,
    tags: ['8bit', 'Animation', 'Games', 'Commissions'],
    aura: 100,
  },
  {
    author: 'Sarah Johnson',
    avatar: '/useri.jpg',
    time: '1 hour ago',
    content:
      "Excited to share a sneak peek of my upcoming project illustration! It's been a labor of love, and I can't wait for you all to see the final product. 🎨📚 #Illustration",
    images: ['/Banner.png'],
    comments: 0,
    shares: 0,
    width: 1200,
    height: 800,
    tags: ['Illustration', 'Desiger', 'Art'],
    aura: 200,
  },
  {
    author: 'Tech Insider',
    avatar: '/user-boyalt-default.png',
    time: '2 hours ago',
    content:
      'Breaking: Major tech company announces revolutionary AI chip that promises to double processing speed while halving energy consumption. This could be a game-changer for the industry. #TechNews #AI',
    images: [],
    comments: 0,
    shares: 0,
    width: 0,
    height: 0,
    tags: ['Technology', 'AI', 'Innovation'],
    aura: 300,
  },
  {
    author: 'CodeMaster',
    avatar: '/useriii.jpg',
    time: '2 days ago',
    content:
      "Just released a new open-source library for React that simplifies state management. It's lightweight, easy to use, and perfect for small to medium-sized projects. Check it out on GitHub and let me know what you think! 💻🚀 #ReactJS #OpenSource #WebDevelopment",
    images: ['/blogii.png', '/blogiii.png'],
    comments: 0,
    shares: 0,
    width: 1400,
    height: 900,
    tags: ['Web Development', 'React', 'Open Source'],
    aura: 400,
  },
  {
    author: 'Alvin Elian',
    avatar: '/user-boy-default.png',
    time: '3 minutes ago',
    content:
      'Here are some of my latest works, created with passion and dedication. Let me know what you think! #Anime #Art #Design #Illustration 🎨🖌️',
    images: [
      '/placeholderi.jpg',
      '/placeholderii.jpg',
      '/placeholderiii.jpg',
      '/placeholderiv.jpg',
    ],
    comments: 0,
    shares: 0,
    width: 800,
    height: 400,
    tags: ['Anime', 'Art', 'Design', 'Illustration'],
    aura: 690,
  },
  {
    author: 'Babu Rao',
    avatar: '/user-boyalt-default.png',
    time: '2 hours ago',
    content:
      'Fhir is a new AI model called Hera fhiri that can generate realistic images from text descriptions. It uses a combination of natural language processing and computer vision to create images that are indistinguishable from real ones. #AI #Art #Technology',
    images: [],
    comments: 0,
    shares: 0,
    width: 0,
    height: 0,
    tags: ['Technology', 'AI', 'Innovation'],
    aura: 69,
  },
];

export const FeedView = () => {
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

  const scribbles = posts.filter((post) => post.images.length === 0);
  const snapshots = posts.filter((post) => post.images.length > 0);

  return (
    <main className="flex-1 overflow-y-auto bg-white p-6 pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Card className={`mb-8 bg-white shadow-lg`}>
          <CardContent className="p-4">
            <h2 className={`mb-2 text-left text-2xl font-bold uppercase text-gray-500`}>Stories</h2>
            <p className={`mb-4 text-gray-600`}>Check out the latest stories from your network.</p>

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
                  className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md transition-all duration-200 hover:bg-opacity-75 focus:outline-none"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              {showRightButton && (
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md transition-all duration-200 hover:bg-opacity-75 focus:outline-none"
                >
                  <ChevronRight className="h-6 w-6" />
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
        <Card className={`mb-8 bg-white shadow-lg`}>
          <CardContent className="p-4">
            <h2 className={`mb-2 text-left text-2xl font-bold uppercase text-gray-500`}>
              Scribbles
            </h2>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
              {scribbles.slice(0, 4).map((post, index) => (
                <div key={`scribble-${index}`} className="h-full">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            {scribbles.length > 4 && (
              <div className="mt-4">
                <h3 className={`mb-2 text-xl font-semibold text-gray-600`}>More Scribbles</h3>
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
        <Card className={`mb-8 bg-white shadow-lg`}>
          <CardContent className="p-4">
            <h2 className={`mb-2 text-left text-2xl font-bold uppercase text-gray-500`}>
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
        className={`py-8 text-center text-gray-600`}
      >
        <p>You&apos;ve reached the end of your feed.</p>
        <p>Check back later for more updates!</p>
      </motion.div>
    </main>
  );
};

export default FeedView;
