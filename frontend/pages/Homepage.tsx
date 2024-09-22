'use client';

import { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import ForYouFeed from '@/C/layout/ForYouFeed';
import FloatingActionBar from '@/CL/FloatingActionBar';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';

export default function ZephyrHomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('large');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setScreenSize('small');
    } else if (window.innerWidth < 1024) {
      setScreenSize('medium');
    } else {
      setScreenSize('large');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar />
        <main className="flex-1 overflow-y-auto">
          <ForYouFeed />
        </main>
        {screenSize !== 'small' && <RightSideBar />}
      </div>
      {screenSize !== 'small' && <FloatingActionBar setIsChatOpen={setIsChatOpen} />}
      <Footer />
    </div>
  );
}
