'use client';

import { HomeIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

import Footer from '@/C/Footer';
import FollowingFeed from '@/C/layout/Following';
import ForYouFeed from '@/C/layout/ForYouFeed';
import FloatingActionBar from '@/CL/FloatingActionBar';
import LeftSideBar from '@/CL/LeftSideBar';
import RightSideBar from '@/CL/RightSideBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        <main className="flex-1 overflow-y-auto bg-background">
          <Tabs defaultValue="for-you" className="mb-0 mt-6 w-full rounded-lg bg-card">
            <div className="mb-2 flex justify-center">
              <TabsList className="inline-flex h-12 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground shadow-sm">
                <TabsTrigger
                  value="for-you"
                  className="rounded-sm px-6 py-2 text-sm font-medium transition-all hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Globals
                </TabsTrigger>
                <TabsTrigger
                  value="following"
                  className="rounded-sm px-6 py-2 text-sm font-medium transition-all hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  <UsersIcon className="mr-2 h-4 w-4" />
                  Following
                </TabsTrigger>
                <TabsTrigger
                  value=""
                  className="rounded-sm px-6 py-2 text-sm font-medium transition-all hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  <TrendingUpIcon className="mr-2 h-4 w-4" />
                  Trending
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="for-you">
              <ForYouFeed />
            </TabsContent>
            <TabsContent value="following">
              <FollowingFeed />
            </TabsContent>
          </Tabs>
        </main>
        {screenSize !== 'small' && <RightSideBar />}
      </div>
      {screenSize !== 'small' && <FloatingActionBar setIsChatOpen={setIsChatOpen} />}
      <Footer />
    </div>
  );
}
