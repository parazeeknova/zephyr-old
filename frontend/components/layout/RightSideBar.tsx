'use client';

import React from 'react';

import LatestActivity from '@/CW/RightSideBar/latestActivity';
import ProfileCard from '@/CW/RightSideBar/profileCard';
import SuggestedConnections from '@/CW/RightSideBar/suggestedConnections';
import ThoughtShare from '@/CW/RightSideBar/thoughtShare';
import YourSkills from '@/CW/RightSideBar/yourSkills';

interface RightSidebarProps {
  isDarkMode: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isDarkMode }) => {
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

  const connections = [
    {
      name: 'Emma Watson',
      profession: 'UI Designer',
      avatarSrc: '/useri.jpg?height=32&width=32',
    },
    {
      name: 'John Doe',
      profession: 'Frontend Developer',
      avatarSrc: '/userii.jpg?height=32&width=32',
    },
  ];

  const skills = ['UI Design', 'UX Research', 'Prototyping', 'Wireframing', 'User Testing'];

  return (
    <aside
      className={`w-80 p-4 space-y-4 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <ProfileCard isDarkMode={isDarkMode} {...profileData} />
      <ThoughtShare isDarkMode={isDarkMode} username={profileData.username} />
      <LatestActivity isDarkMode={isDarkMode} activities={activities} />
      <SuggestedConnections isDarkMode={isDarkMode} connections={connections} />
      <YourSkills isDarkMode={isDarkMode} skills={skills} />
    </aside>
  );
};

export default RightSidebar;
