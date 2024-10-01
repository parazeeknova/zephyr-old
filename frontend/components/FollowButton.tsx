'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ClientFollowButton = dynamic(() => import('./ClientFollowButton'), { ssr: false });

interface FollowButtonProps {
  userId: string;
  initialState: {
    followers: number;
    isFollowedByUser: boolean;
  };
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, initialState }) => {
  return <ClientFollowButton userId={userId} initialState={initialState} />;
};

export default FollowButton;
