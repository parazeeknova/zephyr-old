'use client';

import React, { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import FloatingActionBar from '@/CL/FloatingActionBar';
import Header from '@/CL/Header';
import ProfileFeedView from '@/CL/ProfileFeediew';
import LeftSidebar from '@/CL/ProfileLeftSideBar';
import RightSidebar from '@/CL/ProfileRightSideBar';

const ProfilePage: React.FC = () => {
  //eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState(false);
  //eslint-disable-next-line
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar isDarkMode={isDarkMode} />
        <div className="flex-1 max-w-5xl mx-auto overflow-y-auto">
          <ProfileFeedView isDarkMode={isDarkMode} />
        </div>
        <RightSidebar isDarkMode={isDarkMode} />
        <FloatingActionBar isDarkMode={isDarkMode} setIsChatOpen={setIsChatOpen} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProfilePage;
