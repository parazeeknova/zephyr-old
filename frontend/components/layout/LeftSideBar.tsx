'use client';

import React from 'react';

import Friends from '@/CW/LeftSideBar/friends';
import MyGroups from '@/CW/LeftSideBar/myGroups';
import TrendingTopics from '@/CW/LeftSideBar/TrendingTopics';
import UpcomingEvents from '@/CW/LeftSideBar/UpcomingEvents';

const LeftSideBar: React.FC = () => {
  // These would typically come from an API or state management
  const myGroupsData = [
    { name: 'Picktab Studio', icon: '🎨' },
    { name: 'Arasaka Digital', icon: '🚀' },
    { name: 'Design Jam', icon: '🌵' },
    { name: 'Figma Jam', icon: '💡' },
  ];

  const friendsData = [
    { name: 'Jelly Rendi', status: 'online' },
    { name: 'Rizky Kurniawan', status: 'online' },
    { name: 'Ali Haiqi', status: 'away' },
    { name: 'Kurnialan', status: 'online' },
    { name: 'Syah Fatah', status: 'busy' },
    { name: 'Mindas Kidian', status: 'busy' },
    { name: 'Budi Doremi', status: 'online' },
    { name: 'Zidanko', status: 'away' },
    { name: 'Keanu Satria', status: 'offline', lastSeen: '6 min' },
    { name: 'Dhimas Rasjad', status: 'offline', lastSeen: '9 min' },
    { name: 'Arvin Andhika', status: 'offline', lastSeen: '15 min' },
    { name: 'Jamet Tinkling', status: 'offline', lastSeen: '23 min' },
  ];

  const trendingTopicsData = [
    { name: '#TechInnovation', color: 'text-blue-500 dark:text-blue-400' },
    { name: '#SustainableLiving', color: 'text-green-500 dark:text-green-400' },
    { name: '#ArtificialIntelligence', color: 'text-purple-500 dark:text-purple-400' },
  ];

  const upcomingEventsData = [
    { name: 'Tech Conference 2023', color: 'text-red-500 dark:text-red-400' },
    { name: 'Design Meetup', color: 'text-yellow-500 dark:text-yellow-400' },
    { name: 'Hackathon', color: 'text-green-500 dark:text-green-400' },
  ];

  return (
    <aside className="w-64 space-y-4 bg-background p-4">
      <MyGroups groups={myGroupsData} />
      <Friends friends={friendsData} />
      <TrendingTopics topics={trendingTopicsData} />
      <UpcomingEvents events={upcomingEventsData} />
    </aside>
  );
};

export default LeftSideBar;
