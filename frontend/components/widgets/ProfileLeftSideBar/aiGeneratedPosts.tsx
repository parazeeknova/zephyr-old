'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AIGeneratedPosts: React.FC = () => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <h2 className="text-sm font-semibold uppercase mb-4 text-gray-500">Synthetic Posts</h2>
      <div className="space-y-4">
        {[
          {
            title: 'Innovations in UI Design for 2024',
            summary: 'AI-generated summary of your research on upcoming UI trends...',
          },
          {
            title: 'The Impact of AR on User Experience',
            summary: 'Based on your paper, here are key insights on AR in UX...',
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b pb-4 last:border-b-0"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.summary}</p>
            <Button variant="link" className="text-orange-600 mt-2 p-0">
              Read more
            </Button>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AIGeneratedPosts;
