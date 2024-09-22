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
}

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <Card className="bg-card text-card-foreground">
    <CardContent className="p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">Experience</h2>
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
              <p className="text-sm text-muted-foreground">{job.role}</p>
              <p className="text-sm text-muted-foreground">{job.period}</p>
              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
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
