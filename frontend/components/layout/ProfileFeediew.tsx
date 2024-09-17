'use client';

import { motion } from 'framer-motion';
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
        image: '/placeholderii.jpg',
      },
      {
        title: 'Mobile-First Design Principles',
        date: '2 weeks ago',
        likes: 42,
        comments: 15,
        image: '/blogiii.png',
      },
      {
        title: 'Mobile-First Design Principles',
        date: '2 weeks ago',
        likes: 42,
        comments: 15,
        image: '/placeholderiii.jpg',
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
  recommendedPosts: [
    {
      id: 1,
      className: 'md:col-span-2',
      thumbnail: '/placeholderii.jpg',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 2,
      className: 'col-span-1',
      thumbnail: '/placeholderiii.jpg',
      title: 'Mobile-First Design',
      description: 'Why starting with mobile design leads to better overall user interfaces.',
    },
    {
      id: 3,
      className: 'col-span-1',
      thumbnail: '/placeholderiv.jpg',
      title: 'The Future of AI in Design',
      description:
        'How artificial intelligence is shaping the future of design tools and processes.',
    },
    {
      id: 4,
      className: 'md:col-span-2',
      thumbnail: '/placeholderv.jpg',
      title: 'Accessibility in Web Design',
      description: 'Creating inclusive web experiences for users of all abilities.',
    },
    {
      id: 5,
      className: 'col-span-1',
      thumbnail: '/blogii.png',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 6,
      className: 'md:col-span-2',
      thumbnail: '/blogi.png',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 7,
      className: 'md:col-span-2',
      thumbnail: '/blogiv.png',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 8,
      className: 'col-span-1',
      thumbnail: '/blogiii.png',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 9,
      className: 'md:col-span-2 row-span-2',
      thumbnail: '/Banner.png',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
    {
      id: 10,
      className: 'col-span-1 row-span-2',
      thumbnail: '/useri.jpg',
      title: 'The Art of UX Design',
      description: 'Exploring the principles and practices that make great user experiences.',
    },
  ],
};

interface ProfileFeedViewProps {
  isDarkMode: boolean;
}

const ProfileFeedView: React.FC<ProfileFeedViewProps> = ({ isDarkMode }) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`flex-1 p-8 overflow-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
  >
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex justify-between items-center mb-6"
    >
      <h1
        className={`text-2xl font-bold mb-2 text-left uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        User Profile
      </h1>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white">Engage</Button>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-4"
    >
      <MyPosts data={tempData.myPosts} isDarkMode={isDarkMode} />
      <Skills skills={tempData.skills} isDarkMode={isDarkMode} />
      <Recommendations people={tempData.recommendedPeople} isDarkMode={isDarkMode} />
      <RecommendedPosts posts={tempData.recommendedPosts} isDarkMode={isDarkMode} />
    </motion.div>
  </motion.main>
);

export default ProfileFeedView;
