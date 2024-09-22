'use client';

import React from 'react';

import LatestActivity from '@/CW/RightSideBar/latestActivity';
import ProfileCard from '@/CW/RightSideBar/profileCard';
import SuggestedConnections from '@/CW/RightSideBar/suggestedConnections';
import ThoughtShare from '@/CW/RightSideBar/thoughtShare';
import YourSkills from '@/CW/RightSideBar/yourSkills';

const RightSidebar: React.FC = () => {
  // These would typically come from an API or state management
  const profileData = {
    avatarSrc: '/useriii.jpg',
    username: 'Parazeeeknova',
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

  const skills = [
    'UI Design',
    'UX Research',
    'Prototyping',
    'Wireframing',
    'User Testing',
    'Peskyness',
  ];

  return (
    <aside className="w-80 space-y-4 overflow-y-auto bg-background p-4 text-foreground">
      <ProfileCard {...profileData} />
      <SuggestedConnections />
      <YourSkills skills={skills} />
      <ThoughtShare username={profileData.username} />
      <LatestActivity activities={activities} />
    </aside>
  );
};

export default RightSidebar;
