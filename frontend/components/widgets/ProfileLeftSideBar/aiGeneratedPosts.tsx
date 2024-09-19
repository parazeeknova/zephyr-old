'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AIGeneratedPostsProps {
  posts: Array<{
    title: string;
    summary: string;
  }>;
  isDarkMode: boolean;
}

const AIGeneratedPosts: React.FC<AIGeneratedPostsProps> = ({ posts, isDarkMode }) => (
  <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-6">
      <h2
        className={`mb-4 text-sm font-semibold uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        Synthetic Posts
      </h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border-b pb-4 last:border-b-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {post.summary}
            </p>
            <Button variant="link" className="mt-2 p-0 text-orange-500">
              Read more
            </Button>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AIGeneratedPosts;
