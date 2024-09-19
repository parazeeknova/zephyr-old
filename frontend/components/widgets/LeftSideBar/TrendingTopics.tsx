'use client';

import { TrendingUp } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface Topic {
  name: string;
  color: string;
}

interface TrendingTopicsProps {
  isDarkMode: boolean;
  topics: Topic[];
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ isDarkMode, topics }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent>
      <h2
        className={`mb-4 mt-4 text-sm font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
      >
        Trending Topics
      </h2>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center space-x-2">
            <TrendingUp className={`h-4 w-4 ${topic.color}`} />
            <span>{topic.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default TrendingTopics;
