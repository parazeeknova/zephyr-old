'use client';

import { Loader2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react';

import { getTrendingTopics } from '@/BE/actions/topicActions';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { formatNumber } from '@/lib/utils';

interface TrendingTopic {
  hashtag: string;
  count: number;
}

interface TrendingTopicsProps {
  isCollapsed: boolean;
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ isCollapsed }) => {
  const [topics, setTopics] = useState<TrendingTopic[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const trendingTopics = await getTrendingTopics();
      setTopics(trendingTopics);
    });
  }, []);

  return (
    <Card
      className={`bg-card shadow-sm transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-12 overflow-hidden' : 'w-full'
      }`}
    >
      <CardContent className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
        {isCollapsed ? (
          <TrendingUp className="h-6 w-6 text-muted-foreground" />
        ) : (
          <>
            <CardTitle className="mb-4 mt-1 flex items-center text-sm font-semibold uppercase text-muted-foreground">
              Trending Topics
            </CardTitle>
            {isPending ? (
              <Loader2 className="mx-auto animate-spin" />
            ) : (
              <ul className="space-y-3">
                {topics.map(({ hashtag, count }) => (
                  <li key={hashtag}>
                    <Link href={`/hashtag/${hashtag.slice(1)}`} className="block">
                      <p
                        className="line-clamp-1 break-all font-semibold text-foreground hover:underline"
                        title={hashtag}
                      >
                        {hashtag}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatNumber(count)} {count === 1 ? 'post' : 'posts'}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;
