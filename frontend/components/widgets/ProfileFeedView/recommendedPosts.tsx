'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { LayoutGrid } from '@/components/ui/layout-grid';

interface RecommendedPost {
  id: number;
  className: string;
  thumbnail: string;
  title: string;
  description: string;
}

interface RecommendedPostsProps {
  posts: RecommendedPost[];
}

const PostContent: React.FC<{ post: RecommendedPost }> = ({ post }) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:shadow-lg">
      <Image
        src={post.thumbnail}
        alt={post.title}
        width={400}
        height={400}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="mb-2 text-2xl font-bold text-white">{post.title}</h3>
        <p className="text-sm text-gray-300">{post.description}</p>
      </div>
    </div>
  );
};

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({ posts }) => {
  const cardsWithContent = posts.map((post) => ({
    ...post,
    content: <PostContent post={post} />,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-10 mt-10 text-left text-2xl font-bold uppercase text-muted-foreground"
      >
        Curated chronicles
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="h-screen w-full overflow-auto rounded-xl border border-border bg-card text-card-foreground"
      >
        <LayoutGrid cards={cardsWithContent} />
      </motion.div>
    </motion.div>
  );
};

export default RecommendedPosts;
