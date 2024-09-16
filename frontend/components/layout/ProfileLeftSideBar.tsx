'use client';

import React from 'react';

import AIGeneratedPosts from '@/CW/ProfileLeftSideBar/aiGeneratedPosts';
import Analytics from '@/CW/ProfileLeftSideBar/analytics';
import Friends from '@/CW/ProfileLeftSideBar/friendsProfile';
import RecentActivity from '@/CW/ProfileLeftSideBar/recentActivity';

const LeftSidebar: React.FC = () => (
  <aside className="w-80 bg-white p-6 overflow-auto flex flex-col">
    <AIGeneratedPosts />
    <RecentActivity />
    <Analytics />
    <Friends />
  </aside>
);

export default LeftSidebar;
