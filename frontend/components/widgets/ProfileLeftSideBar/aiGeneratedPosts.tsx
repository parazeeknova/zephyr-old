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
}

const AIGeneratedPosts: React.FC<AIGeneratedPostsProps> = ({ posts }) => (
  <Card className="mb-6 bg-card text-card-foreground">
    <CardContent className="p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">
        Synthetic Posts
      </h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-border pb-4 last:border-b-0"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{post.summary}</p>
            <Button variant="link" className="mt-2 p-0 text-primary">
              Read more
            </Button>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AIGeneratedPosts;
