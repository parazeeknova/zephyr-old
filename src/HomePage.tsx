import React from 'react';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContent from './MainContent';
import BottomNavbar from './BottomNavbar';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default HomePage;
