'use client';

import React from 'react';

import Footer from '@/C/Footer';
import Header from '@/CL/Header';
import ProfileFeedView from '@/CL/ProfileFeediew';
import LeftSidebar from '@/CL/ProfileLeftSideBar';
import RightSidebar from '@/CL/ProfileRightSideBar';

const ProfilePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1 bg-gray-100 dark:bg-gray-900">
        <LeftSidebar isDarkMode={isDarkMode} />
        <div className="flex-1 max-w-5.1xl mx-auto">
          <ProfileFeedView isDarkMode={isDarkMode} />
        </div>
        <RightSidebar isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ProfilePage;
