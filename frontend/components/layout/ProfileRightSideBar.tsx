'use client';

import React from 'react';

import ProfileCard from '@/CW/ProfileRightSideBar/userDetails';
import FollowedTopics from '@/CW/ProfileRightSideBar/userFollowedTopics';
import InterestedCommunities from '@/CW/ProfileRightSideBar/userIntrestedCommunities';

const RightSidebar: React.FC = () => (
  <div className="space-y-6">
    <div className="sticky top-8 space-y-4">
      <ProfileCard />
      <FollowedTopics />
      <InterestedCommunities />
    </div>
  </div>
);

export default RightSidebar;
