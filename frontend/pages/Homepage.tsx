'use client';

import { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import { default as FeedView } from '@/CL/FeedView';
import FloatingActionBar from '@/CL/FloatingActionBar';
import Header from '@/CL/Header';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';

export default function ZephyrHomePage() {
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
      className={`flex min-h-screen flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar isDarkMode={isDarkMode} />
        <FeedView isDarkMode={isDarkMode} />
        <RightSideBar isDarkMode={isDarkMode} />
        <FloatingActionBar isDarkMode={isDarkMode} setIsChatOpen={setIsChatOpen} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
