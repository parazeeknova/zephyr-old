'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceProps {
  data: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    logo: string;
  }>;
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ data, isDarkMode }) => (
  <Card className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-4">
      <h2
        className={`text-sm font-semibold uppercase mb-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-500'
        }`}
      >
        Experience
      </h2>
      <div className="space-y-4">
        {data.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <Avatar>
              <AvatarImage src={job.logo} alt={job.company} />
              <AvatarFallback>{job.company[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{job.company}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {job.role}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {job.period}
              </p>
              <div
                className={`flex items-center text-sm mt-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Experience;
