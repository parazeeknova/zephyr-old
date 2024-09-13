import React from 'react';
import { Button } from '@/components/ui/button';
import AIGeneratedPosts from './widgets/aiGeneratedPosts';
import RecentActivity from './widgets/recentActivity';
import Analytics from './widgets/analytics';
import Friends from './widgets/friendsProfile';
import MyPosts from './widgets/myPostsProfile';
import Skills from './widgets/skillsProfile';
import Recommendations from './widgets/recommendedProfile';
import ProfileCard from './widgets/userDetails';
import FollowedTopics from './widgets/userFollowedTopics';
import InterestedCommunities from './widgets/intrestedCommunities';
import FloatingActionButton from './widgets/floatingActionButtonProfile';
import FloatingProfileButton from './widgets/floatingProfileButtonProfile';
import RecommendedPosts from './widgets/recommendedPosts';
import { Header } from '../homePage/widgets/MainHeader';
import { Footer } from '../homePage/widgets/MainFooter';

const UserProfile: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-1">
        <aside className="w-80 bg-white p-6 overflow-auto flex flex-col">
          <AIGeneratedPosts />
          <RecentActivity />
          <Analytics />
          <Friends />
        </aside>
        <main className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-2 text-left text-gray-500 uppercase">
              User Profile
            </h1>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Engage
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4">
              <MyPosts />
              <Skills />
              <Recommendations />
              <RecommendedPosts />
            </div>
            <div className="space-y-6">
              <div className="sticky top-8 space-y-4">
                <ProfileCard />
                <FollowedTopics />
                <InterestedCommunities />
              </div>
            </div>
          </div>
        </main>
        <FloatingActionButton />
        <FloatingProfileButton />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default UserProfile;
