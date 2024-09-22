'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <Card className="bg-card text-card-foreground">
    <CardContent className="p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.div key={skill} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Skills;
