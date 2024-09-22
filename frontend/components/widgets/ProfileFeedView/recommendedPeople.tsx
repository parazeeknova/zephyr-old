'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface RecommendationsProps {
  people: Array<{
    name: string;
    role: string;
    comment: string;
    avatar: string;
  }>;
}

const Recommendations: React.FC<RecommendationsProps> = ({ people }) => (
  <Card className="bg-card text-card-foreground">
    <CardContent className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase text-muted-foreground">
          Endorsements based on your activity:
        </h2>
        <Button variant="link" className="text-primary">
          View all <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {people.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <Avatar>
              <AvatarImage src={rec.avatar} alt={rec.name} width={64} height={64} />
              <AvatarFallback>{rec.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{rec.name}</h3>
              <p className="text-xs text-muted-foreground">{rec.role}</p>
              <p className="mt-1 text-sm text-foreground">{rec.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Recommendations;
