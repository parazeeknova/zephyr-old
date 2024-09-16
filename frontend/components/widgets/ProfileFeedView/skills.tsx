'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Skills: React.FC = () => (
  <Card>
    <CardContent className="p-6">
      <h2 className="text-sm font-semibold mb-4 uppercase text-gray-500">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {[
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
        ].map((skill) => (
          <motion.div key={skill} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Skills;
