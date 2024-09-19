'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface RecentActivityProps {
  activities: Array<{
    action: string;
    target: string;
    time: string;
  }>;
  isDarkMode: boolean;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities, isDarkMode }) => (
  <Card className={`mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-6">
      <h2
        className={`mb-4 text-sm font-semibold uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
      >
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <p className="text-sm">
              <span className="font-semibold">{activity.action}</span> {activity.target}
              <span className={`ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {activity.time}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default RecentActivity;
