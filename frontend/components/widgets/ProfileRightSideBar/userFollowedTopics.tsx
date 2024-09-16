'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface FollowedTopicsProps {
  topics: string[];
  isDarkMode: boolean;
}

const FollowedTopics: React.FC<FollowedTopicsProps> = ({ topics, isDarkMode }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent className="p-6">
      <h2
        className={`text-sm font-semibold mb-4 uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        Followed Topics
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((topic) => (
          <motion.div key={topic} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant="secondary"
              className={
                isDarkMode ? 'bg-gray-700 text-orange-400' : 'bg-orange-100 text-orange-800'
              }
            >
              {topic}
            </Badge>
          </motion.div>
        ))}
      </div>
      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Following {topics.length} topics
      </p>
    </CardContent>
  </Card>
);

export default FollowedTopics;
