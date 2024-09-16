'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import MyPosts from '@/CW/ProfileFeedView/myPosts';
import Recommendations from '@/CW/ProfileFeedView/recommendedPeople';
import RecommendedPosts from '@/CW/ProfileFeedView/recommendedPosts';
import Skills from '@/CW/ProfileFeedView/skills';

const ProfileFeediew: React.FC = () => (
  <main className="flex-1 p-8 overflow-auto">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold mb-2 text-left text-gray-500 uppercase">User Profile</h1>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Engage</Button>
    </div>
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2 space-y-4">
        <MyPosts />
        <Skills />
        <Recommendations />
        <RecommendedPosts />
      </div>
    </div>
  </main>
);

export default ProfileFeediew;
