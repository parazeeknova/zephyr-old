'use client';

import React from 'react';

import { useSession } from '@/BE/SessionProvider';
import LatestActivity from '@/CW/RightSideBar/latestActivity';
import ProfileCard from '@/CW/RightSideBar/profileCard';
import SuggestedConnections from '@/CW/RightSideBar/suggestedConnections';
import ThoughtShare from '@/CW/RightSideBar/thoughtShare';
import TrendingTopics from '@/CW/RightSideBar/TrendingTopics';

const RightSidebar: React.FC = () => {
  const { user } = useSession();

  const profileData = {
    avatarUrl: user?.avatarUrl,
    username: user?.username,
    profession: 'Programmer',
    followers: 69,
    following: 6.9,
    aura: 69,
  };

  const activities = [
    { type: 'like' as const, users: ['ariadnakro', 'kurniajati'], time: 'Just now' },
    {
      type: 'tag' as const,
      users: ['uibucket'],
      content: '@kemito this design is beautiful!',
      time: '2m ago',
    },
    { type: 'follow' as const, users: ['Jelly'], time: '5m ago' },
  ];

  return (
    <aside className="w-80 space-y-4 overflow-y-auto bg-[hsl(var(--background-alt))] p-4 text-foreground">
      <ProfileCard {...profileData} />
      <SuggestedConnections />
      <TrendingTopics />
      <ThoughtShare username={profileData.username} />
      <LatestActivity activities={activities} />
    </aside>
  );
};

export default RightSidebar;
