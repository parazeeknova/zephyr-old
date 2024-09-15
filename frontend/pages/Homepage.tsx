'use client';

import { useState, useEffect } from 'react';

import FloatingChatSearchBar from '@/C/FloatingChatSearchBar';
import Footer from '@/C/Footer';
import SearchBarGlobal from '@/C/SearchBarGlobal';
import { default as FeedView } from '@/CL/FeedView';
import Header from '@/CL/Header';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';

export default function ZephyrHomepage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <SearchBarGlobal
        isDarkMode={isDarkMode}
        isScrolled={isScrolled}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setIsChatOpen={setIsChatOpen}
      />

      {isChatOpen && (
        <FloatingChatSearchBar isDarkMode={isDarkMode} setIsChatOpen={setIsChatOpen} />
      )}

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
