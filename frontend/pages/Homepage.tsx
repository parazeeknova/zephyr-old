'use client';

import { useState } from 'react';

import Footer from '@/C/Footer';
import { default as FeedView } from '@/CL/FeedView';
import Header from '@/CL/Header';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';

export default function ZephyrHomepage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar isDarkMode={isDarkMode} />
        <FeedView isDarkMode={isDarkMode} />
        <RightSideBar isDarkMode={isDarkMode} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
