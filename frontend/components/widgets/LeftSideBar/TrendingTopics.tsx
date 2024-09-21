'use client';

import { TrendingUp } from 'lucide-react';
import React from 'react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface Topic {
  name: string;
  color: string;
}

interface TrendingTopicsProps {
  topics: Topic[];
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => (
  <Card className="bg-card shadow-sm">
    <CardContent>
      <CardTitle className="mb-4 mt-4 text-sm font-semibold uppercase text-muted-foreground">
        Trending Topics
      </CardTitle>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-center space-x-2">
            <TrendingUp className={`h-4 w-4 text-primary`} />
            <span className="cursor-pointer text-foreground transition-colors duration-200 hover:text-primary">
              {topic.name}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default TrendingTopics;
