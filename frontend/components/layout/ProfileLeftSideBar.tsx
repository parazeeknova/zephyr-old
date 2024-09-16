'use client';

import React from 'react';

import AIGeneratedPosts from '@/CW/ProfileLeftSideBar/aiGeneratedPosts';
import Analytics from '@/CW/ProfileLeftSideBar/analytics';
import Friends from '@/CW/ProfileLeftSideBar/friendsProfile';
import RecentActivity from '@/CW/ProfileLeftSideBar/recentActivity';

// Temporary static data
const tempData = {
  aiGeneratedPosts: [
    {
      title: 'Innovations in UI Design for 2024',
      summary: 'AI-generated summary of your research on upcoming UI trends...',
    },
    {
      title: 'The Impact of AR on User Experience',
      summary: 'Based on your paper, here are key insights on AR in UX...',
    },
  ],
  analytics: {
    mostLikedPost: {
      title: '10 UX Principles Every Designer Should Know',
      likes: 1234,
    },
    mostViewedPost: {
      title: 'The Future of AI in UX Design',
      views: 5678,
    },
  },
  friends: [
    { name: 'Alice Johnson', role: 'UX Researcher', avatar: '/user-boy-default.png' },
    { name: 'Bob Smith', role: 'UI Designer', avatar: '/user-boy-default.png' },
    { name: 'Carol White', role: 'Product Manager', avatar: '/user-boy-default.png' },
    { name: 'David Brown', role: 'Frontend Developer', avatar: '/user-boyalt-default.png' },
    { name: 'Eva Green', role: 'UX Writer', avatar: '/user-girlstyled-default.png' },
  ],
  recentActivity: [
    {
      action: 'Commented on',
      target: '"The Role of AI in UX Design"',
      time: '2 hours ago',
    },
    {
      action: 'Liked',
      target: '"Responsive Design Best Practices"',
      time: '1 day ago',
    },
    {
      action: 'Shared',
      target: '"UX Trends for 2024"',
      time: '3 days ago',
    },
  ],
};

interface LeftSidebarProps {
  isDarkMode: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isDarkMode }) => (
  <aside className="w-96 bg-white dark:bg-gray-800 p-6 overflow-auto flex flex-col">
    <AIGeneratedPosts posts={tempData.aiGeneratedPosts} isDarkMode={isDarkMode} />
    <RecentActivity activities={tempData.recentActivity} isDarkMode={isDarkMode} />
    <Analytics data={tempData.analytics} isDarkMode={isDarkMode} />
    <Friends friends={tempData.friends} isDarkMode={isDarkMode} />
  </aside>
);

export default LeftSidebar;
