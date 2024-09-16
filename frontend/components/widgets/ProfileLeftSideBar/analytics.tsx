'use client';

import { ThumbsUp, Eye } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface AnalyticsProps {
  data: {
    mostLikedPost: {
      title: string;
      likes: number;
    };
    mostViewedPost: {
      title: string;
      views: number;
    };
  };
  isDarkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ data, isDarkMode }) => (
  <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-6">
      <h2
        className={`text-sm font-semibold mb-4 uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        Analytics
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Most Liked Post</span>
          </div>
          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {data.mostLikedPost.likes} likes
          </span>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          &quot;{data.mostLikedPost.title}&quot;
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Most Viewed Post</span>
          </div>
          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {data.mostViewedPost.views} views
          </span>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          &quot;{data.mostViewedPost.title}&quot;
        </p>
      </div>
    </CardContent>
  </Card>
);

export default Analytics;
