'use client';

import React from 'react';

import Footer from '@/C/Footer';
import Header from '@/CL/Header';
import MainContent from '@/CL/ProfileFeediew';
import LeftSidebar from '@/CL/ProfileLeftSideBar';
import RightSidebar from '@/CL/ProfileRightSideBar';

const ProfilePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProfilePage;
