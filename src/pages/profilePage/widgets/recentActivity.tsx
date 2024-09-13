import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const RecentActivity: React.FC = () => (
  <Card className="mb-6">
    <CardContent className="p-6">
      <h2 className="text-sm font-semibold mb-4 uppercase text-gray-500">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {[
          {
            action: 'Commented on',
            target: '"The Role of AI in UX Design"',
            time: '2 hours ago',
          },
          {
            action: 'Liked',
            target: '"Responsive Design Best Practices"',
            time: '1 day ago',
          },
          {
            action: 'Shared',
            target: '"UX Trends for 2024"',
            time: '3 days ago',
          },
        ].map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <p className="text-sm">
              <span className="font-semibold">{activity.action}</span>{' '}
              {activity.target}
              <span className="text-gray-500 ml-2">{activity.time}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RecentActivity;
