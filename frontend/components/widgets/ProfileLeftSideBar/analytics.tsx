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
}

const Analytics: React.FC<AnalyticsProps> = ({ data }) => (
  <Card className="mb-6 bg-card text-card-foreground">
    <CardContent className="p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">Analytics</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-5 w-5 text-primary" />
            <span className="font-medium">Most Liked Post</span>
          </div>
          <span className="text-sm text-muted-foreground">{data.mostLikedPost.likes} likes</span>
        </div>
        <p className="text-sm text-foreground">&quot;{data.mostLikedPost.title}&quot;</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-primary" />
            <span className="font-medium">Most Viewed Post</span>
          </div>
          <span className="text-sm text-muted-foreground">{data.mostViewedPost.views} views</span>
        </div>
        <p className="text-sm text-foreground">&quot;{data.mostViewedPost.title}&quot;</p>
      </div>
    </CardContent>
  </Card>
);

export default Analytics;
