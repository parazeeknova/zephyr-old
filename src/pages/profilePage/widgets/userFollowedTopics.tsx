import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FollowedTopics: React.FC = () => (
  <Card>
    <CardContent className="p-6">
      <h2 className="text-lg font-semibold mb-4">Followed Topics</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          'UX Design',
          'UI Trends',
          'Accessibility',
          'Mobile UX',
          'Design Systems',
        ].map((topic) => (
          <motion.div
            key={topic}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800"
            >
              {topic}
            </Badge>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-gray-600">Following 15 topics</p>
    </CardContent>
  </Card>
);

export default FollowedTopics;
