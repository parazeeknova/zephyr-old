'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Recommendations: React.FC = () => (
  <Card>
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold uppercase text-gray-500">
          Endorsements based on your activity :
        </h2>
        <Button variant="link" className="text-orange-600">
          View all <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {[
          {
            name: 'Leon Ward, CEO',
            comment: 'It was so good to work with Jean. Shes very creative.',
          },
          {
            name: 'Keith Scott, Project Manager',
            comment: 'Jean is a super-talented individual with a constant eager...',
          },
        ].map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${rec.name[0]}`} />
              <AvatarFallback>{rec.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{rec.name}</h3>
              <p className="text-sm text-gray-600">{rec.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Recommendations;
