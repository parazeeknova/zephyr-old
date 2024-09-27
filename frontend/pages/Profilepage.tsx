'use client';

import React, { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import FloatingActionBar from '@/CL/FloatingActionBar';
import ProfileFeedView from '@/CL/ProfileFeediew';
import LeftSidebar from '@/CL/ProfileLeftSideBar';
import RightSidebar from '@/CL/ProfileRightSideBar';

interface ProfilePageProps {
  username: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChatOpen, setIsChatOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {showLeftSidebar && <LeftSidebar />}
        <main
          className={`flex-1 overflow-y-auto ${!showLeftSidebar && !showRightSidebar ? 'w-full' : ''}`}
        >
          <div className="mx-auto max-w-5xl p-4">
            <ProfileFeedView username={username} />
          </div>
        </main>
        {showRightSidebar && <RightSidebar />}
        <FloatingActionBar setIsChatOpen={setIsChatOpen} />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
