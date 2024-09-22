'use client';

import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import Friends from '@/CW/LeftSideBar/friends';
import MyGroups from '@/CW/LeftSideBar/myGroups';
import TrendingTopics from '@/CW/LeftSideBar/TrendingTopics';
import UpcomingEvents from '@/CW/LeftSideBar/UpcomingEvents';

const LeftSideBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
        setIsCollapsed(true);
      } else {
        setScreenSize('large');
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const sidebarWidth = () => {
    if (screenSize === 'small') return 'w-0';
    if (screenSize === 'medium' || (isCollapsed && !isHovered)) return 'w-16';
    return 'w-64';
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out ${sidebarWidth()} bg-background p-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {screenSize !== 'small' && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`mb-4 ${isCollapsed && !isHovered ? 'h-8 w-8 pl-2' : 'w-full'}`}
          >
            <Menu
              className={`${isCollapsed && !isHovered ? 'h-6 w-6 text-muted-foreground' : 'h-6 w-6'}`}
            />
            {(!isCollapsed || isHovered) && (
              <p className="ps-2 font-semibold uppercase sm:inline">Overview</p>
            )}
          </Button>
          <div className="space-y-4">
            <TrendingTopics topics={trendingTopicsData} isCollapsed={isCollapsed && !isHovered} />
            <MyGroups groups={myGroupsData} isCollapsed={isCollapsed && !isHovered} />
            <Friends friends={friendsData} isCollapsed={isCollapsed && !isHovered} />
            <UpcomingEvents events={upcomingEventsData} isCollapsed={isCollapsed && !isHovered} />
          </div>
        </>
      )}
    </aside>
  );
};

export default LeftSideBar;
