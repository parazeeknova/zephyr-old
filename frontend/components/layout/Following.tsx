'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

import InfiniteScrollContainer from '@/C/InfiniteScrollContainer';
import PostsLoadingSkeleton from '@/C/posts/editor/PostsLoadingSkeleton';
import kyInstance from '@/lib/ky';
import { PostsPage } from '@/lib/types';

import FeedView from './FeedView';

export default function FollowingFeed() {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['post-feed', 'following'],
      queryFn: ({ pageParam }) =>
        kyInstance
          .get('/api/posts/following', pageParam ? { searchParams: { cursor: pageParam } } : {})
          .json<PostsPage>(),
      initialPageParam: null as string | null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === 'pending') {
    return <PostsLoadingSkeleton />;
  }

  if (status === 'success' && !posts.length && !hasNextPage) {
    return (
      <p className="text-center text-muted-foreground">
        No Fleets found. Start following people to see their Fleets here!
      </p>
    );
  }

  if (status === 'error') {
    return <p className="text-center text-destructive">An error occurred while loading posts.</p>;
  }

  return (
    <InfiniteScrollContainer onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}>
      <FeedView posts={posts} />
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin bg-background" />}
    </InfiniteScrollContainer>
  );
}
