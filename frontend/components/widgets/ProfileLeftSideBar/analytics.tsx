'use client';

import { ThumbsUp, Eye } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

const Analytics: React.FC = () => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <h2 className="text-sm font-semibold mb-4 uppercase text-gray-500">Analytics</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Most Liked Post</span>
          </div>
          <span className="text-sm text-gray-600">1,234 likes</span>
        </div>
        <p className="text-sm text-gray-800">
          &quot;10 UX Principles Every Designer Should Know&quot;
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Most Viewed Post</span>
          </div>
          <span className="text-sm text-gray-600">5,678 views</span>
        </div>
        <p className="text-sm text-gray-800">&quot;The Future of AI in UX Design&quot;</p>
      </div>
    </CardContent>
  </Card>
);

export default Analytics;
