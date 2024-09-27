'use client';

import React from 'react';

import { useSession } from '@/BE/SessionProvider';
import ProfilePage from '@/FP/Profilepage';

interface ProfileContentProps {
  username: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ username }) => {
  const { user } = useSession();

  if (!user) {
    return <p className="text-destructive">You&apos;re not authorized to view this page.</p>;
  }

  return <ProfilePage username={username} />;
};

export default ProfileContent;
