import React from 'react';
import { motion } from 'framer-motion';

const RecommendedPosts: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4">Recommended Posts</h2>
    <div className="grid grid-cols-3 gap-4">
      {[
        {
          title: 'The Impact of AI on UX Design',
          author: 'Jane Doe',
          likes: 120,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'Designing for Accessibility: Best Practices',
          author: 'John Smith',
          likes: 89,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'The Future of Mobile UI',
          author: 'Emily Johnson',
          likes: 156,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'Color Theory in Web Design',
          author: 'Michael Brown',
          likes: 72,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'UX Writing: The Art of Microcopy',
          author: 'Sarah Lee',
          likes: 95,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'The Psychology of User Interfaces',
          author: 'David Chen',
          likes: 108,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'Responsive Design Trends for 2024',
          author: 'Emma Wilson',
          likes: 134,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'Designing for Voice Interfaces',
          author: 'Alex Rodriguez',
          likes: 87,
          image: '/placeholder.svg?height=150&width=250',
        },
        {
          title: 'The Role of Animation in UX',
          author: 'Olivia Taylor',
          likes: 112,
          image: '/placeholder.svg?height=150&width=250',
        },
      ].map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-32 object-cover"
          />
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
