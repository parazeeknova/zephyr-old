'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
interface RecommendedPostsProps {
  posts: Array<{
    title: string;
    author: string;
    likes: number;
    image: string;
  }>;
  isDarkMode: boolean;
}

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({ posts, isDarkMode }) => (
  <div className="mt-8">
    <h2
      className={`text-2xl font-bold mb-10 mt-10 text-left uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
    >
      Curated chronicles
    </h2>
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`rounded-lg shadow-sm overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
        >
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-32 object-cover"
            width={200}
            height={200}
          />
          <div className="p-4">
            <h3 className="font-semibold text-sm">{post.title}</h3>
            <p className="text-xs text-gray-600 mt-1">By {post.author}</p>
            <p className="text-xs text-gray-500 mt-1">{post.likes} likes</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default RecommendedPosts;
