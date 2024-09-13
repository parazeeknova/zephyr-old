import React from 'react';
import { Button } from '@/components/ui/button';
import AIGeneratedPosts from './widgets/aiGeneratedPosts';
import RecentActivity from './widgets/recentActivity';
import Analytics from './widgets/analytics';
import Friends from './widgets/friendsProfile';
import MyPosts from './widgets/myPostsProfile';
import Skills from './widgets/skillsProfile';
import Recommendations from './widgets/recommendedProfile';
import Experience from './widgets/experienceProfile';
import FollowedTopics from './widgets/userFollowedTopics';
import InterestedCommunities from './widgets/intrestedCommunities';
import FloatingActionButton from './widgets/floatingActionButtonProfile';
import FloatingProfileButton from './widgets/floatingProfileButtonProfile';
import RecommendedPosts from './widgets/recommendedPosts';

const userProfile: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-80 bg-white p-6 overflow-auto flex flex-col">
        <AIGeneratedPosts />
        <RecentActivity />
        <Analytics />
        <Friends />
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Candidate profile</h1>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Invite to Job
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <MyPosts />
            <Skills />
            <Recommendations />
            <RecommendedPosts />
          </div>
          <div className="space-y-6">
            <div className="sticky top-8">
              <Experience />
              <FollowedTopics />
              <InterestedCommunities />
            </div>
          </div>
        </div>
      </main>
      <FloatingActionButton />
      <FloatingProfileButton />
    </div>
  );
};

export default userProfile;
