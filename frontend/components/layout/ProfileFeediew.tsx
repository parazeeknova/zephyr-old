'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import MyPosts from '@/CW/ProfileFeedView/myPosts';
import Recommendations from '@/CW/ProfileFeedView/recommendedPeople';
import RecommendedPosts from '@/CW/ProfileFeedView/recommendedPosts';
import Skills from '@/CW/ProfileFeedView/skills';

// Temporary static data
const tempData = {
  myPosts: {
    blogs: [
      {
        title: 'The Future of UX Design',
        date: '2 days ago',
        likes: 24,
        comments: 8,
        image: '/blogi.png',
      },
      {
        title: 'Designing for Accessibility',
        date: '1 week ago',
        likes: 56,
        comments: 12,
        image: '/blogii.png',
      },
      {
        title: 'Mobile-First Design Principles',
        date: '2 weeks ago',
        likes: 42,
        comments: 15,
        image: '/blogiii.png',
      },
    ],
    researchPapers: [
      {
        title: 'Impact of AI on UX Design Processes',
        date: '1 month ago',
        citations: 15,
      },
      {
        title: 'User Behavior in AR Interfaces',
        date: '3 months ago',
        citations: 22,
      },
    ],
  },
  recommendedPosts: [
    {
      title: 'The Impact of AI on UX Design',
      author: 'Jane Doe',
      likes: 120,
      image: '/placeholderi.jpg',
    },
    {
      title: 'Designing for Accessibility: Best Practices',
      author: 'John Smith',
      likes: 89,
      image: '/placeholderii.jpg',
    },
  ],
  recommendedPeople: [
    {
      name: 'Leon Ward',
      role: 'CEO',
      comment: "It was so good to work with Jean. She's very creative.",
      avatar: '/useri.jpg',
    },
    {
      name: 'Keith Scott',
      role: 'Project Manager',
      comment: 'Jean is a super-talented individual with a constant eager...',
      avatar: '/userii.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'UX Designer',
      comment: "Jean's insights have been invaluable to our team...",
      avatar: '/useriii.jpg',
    },
  ],
  skills: [
    'UI',
    'UX',
    'UX Research',
    'Responsive Web Design',
    'Mobile design',
    'Web UI',
    'Wireframing',
    'Branding',
    'Usability Testing',
    'UX Prototyping',
    'UI Graphics',
  ],
};

interface ProfileFeedViewProps {
  isDarkMode: boolean;
}

const ProfileFeedView: React.FC<ProfileFeedViewProps> = ({ isDarkMode }) => (
  <main
    className={`flex-1 p-8 overflow-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
  >
    <div className="flex justify-between items-center mb-6">
      <h1
        className={`text-2xl font-bold mb-2 text-left uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        User Profile
      </h1>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Engage</Button>
    </div>
    <div className="space-y-4">
      <MyPosts data={tempData.myPosts} isDarkMode={isDarkMode} />
      <Skills skills={tempData.skills} isDarkMode={isDarkMode} />
      <Recommendations people={tempData.recommendedPeople} isDarkMode={isDarkMode} />
      <RecommendedPosts posts={tempData.recommendedPosts} isDarkMode={isDarkMode} />
    </div>
  </main>
);

export default ProfileFeedView;
