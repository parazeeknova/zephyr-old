'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Experience: React.FC = () => (
  <div className="space-y-4">
    <h2 className="text-sm font-semibold uppercase text-gray-500 pt-5">Experience</h2>
    {[
      {
        company: 'PeskyCorp',
        role: 'CEO',
        period: 'Oct 2020 - Present',
        location: 'Github',
      },
      {
        company: 'Facebook',
        role: 'Senior UX Designer',
        period: 'Jun 2018 - Sep 2020',
        location: 'Poland',
      },
      {
        company: 'Sketch',
        role: 'Interface Designer',
        period: 'May 2015 - Jun 2018',
        location: 'Freelance',
      },
    ].map((job, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start space-x-4"
      >
        <Avatar>
          <AvatarImage src={`/placeholder.png?height=40&width=40&text=${job.company[0]}`} />
          <AvatarFallback>{job.company[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{job.company}</h3>
          <p className="text-sm text-gray-600">{job.role}</p>
          <p className="text-sm text-gray-500">{job.period}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Experience;
