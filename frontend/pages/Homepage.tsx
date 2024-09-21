'use client';

import { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import { default as FeedView } from '@/CL/FeedView';
import FloatingActionBar from '@/CL/FloatingActionBar';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';

export default function ZephyrHomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar />
        <main className="flex-1 overflow-y-auto">
          <FeedView />
        </main>
        <RightSideBar />
      </div>
      <FloatingActionBar setIsChatOpen={setIsChatOpen} />
      <Footer />
    </div>
  );
}
