'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const RecommendedPosts: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-10 mt-10 text-left text-gray-500 uppercase">
      Curated chronicles
    </h2>
    <div className="grid grid-cols-3 gap-4">
      {[
        {
          title: 'The Impact of AI on UX Design',
          author: 'Jane Doe',
          likes: 120,
          image: '/placeholderII.jpg?height=150&width=250',
        },
        {
          title: 'Designing for Accessibility: Best Practices',
          author: 'John Smith',
          likes: 89,
          image: 'Banner.png?height=150&width=250',
        },
        {
          title: 'The Future of Mobile UI',
          author: 'Emily Johnson',
          likes: 156,
          image: '/placeholderIII.jpg?height=150&width=250',
        },
        {
          title: 'Color Theory in Web Design',
          author: 'Michael Brown',
          likes: 72,
          image: '/zy.png?height=150&width=250',
        },
        {
          title: 'UX Writing: The Art of Microcopy',
          author: 'Sarah Lee',
          likes: 95,
          image: '/placeholderIV.jpg?height=150&width=250',
        },
        {
          title: 'The Psychology of User Interfaces',
          author: 'David Chen',
          likes: 108,
          image: '/placeholderI.png?height=150&width=250',
        },
        {
          title: 'Responsive Design Trends for 2024',
          author: 'Emma Wilson',
          likes: 134,
          image: '/placeholderV.jpg?height=150&width=250',
        },
        {
          title: 'Designing for Voice Interfaces',
          author: 'Alex Rodriguez',
          likes: 87,
          image: '/placeholder.png?height=150&width=250',
        },
        {
          title: 'The Role of Animation in UX',
          author: 'Olivia Taylor',
          likes: 112,
          image: '/placeholderVI.jpg?height=150&width=250',
        },
      ].map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <Image src={post.image} alt={post.title} className="w-full h-32 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-sm">{post.title}</h3>
            <p className="text-xs text-gray-600 mt-1">By {post.author}</p>
            <p className="text-xs text-gray-500 mt-1">{post.likes} likes</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default RecommendedPosts;
