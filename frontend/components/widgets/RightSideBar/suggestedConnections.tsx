'use client';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react';

import { getSuggestedConnections } from '@/BE/actions/userActions';
import FollowButton from '@/C/FollowButton';
import UserAvatar from '@/C/UserAvatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserData } from '@/lib/types';

const SuggestedConnections: React.FC = () => {
  const [connections, setConnections] = useState<UserData[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const suggestedUsers = await getSuggestedConnections();
      setConnections(suggestedUsers);
    });
  }, []);

  return (
    <Card className="bg-card shadow-md">
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">
          Suggested Connections
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <Loader2 className="mx-auto animate-spin" />
        ) : (
          <ul className="space-y-4">
            {connections.map((connection) => (
              <li key={connection.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Link href={`/users/${connection.username}`}>
                    <UserAvatar avatarUrl={connection.avatarUrl} size={32} />
                  </Link>
                  <div>
                    <p className="line-clamp-1 break-all font-semibold text-foreground hover:underline">
                      {connection.displayName}
                    </p>
                    <Link href={`/users/${connection.username}`}>
                      <p className="text-sm text-muted-foreground">@{connection.username}</p>
                    </Link>
                  </div>
                </div>
                <FollowButton
                  userId={connection.id}
                  initialState={{
                    followers: connection._count.followers,
                    isFollowedByUser: connection.followers.some(
                      ({ followerId }) => followerId === connection.id,
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedConnections;
