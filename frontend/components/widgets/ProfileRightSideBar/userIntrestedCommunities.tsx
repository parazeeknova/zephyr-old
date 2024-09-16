'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface InterestedCommunitiesProps {
  communities: string[];
  isDarkMode: boolean;
}

const InterestedCommunities: React.FC<InterestedCommunitiesProps> = ({
  communities,
  isDarkMode,
}) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent className="p-6">
      <h2
        className={`text-sm font-semibold mb-4 uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        Interested Communities
      </h2>
      <div className="space-y-4">
        {communities.map((community, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <span>{community}</span>
            <Button
              variant="outline"
              size="sm"
              className={isDarkMode ? 'bg-gray-700 text-white' : ''}
            >
              Join
            </Button>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default InterestedCommunities;
