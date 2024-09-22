'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface FollowedTopicsProps {
  topics: string[];
}

const FollowedTopics: React.FC<FollowedTopicsProps> = ({ topics }) => (
  <Card className="bg-card text-card-foreground">
    <CardContent className="p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">
        Followed Topics
      </h2>
      <div className="mb-4 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <motion.div key={topic} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {topic}
            </Badge>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Following {topics.length} topics</p>
    </CardContent>
  </Card>
);

export default FollowedTopics;
