'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface YourSkillsProps {
  isDarkMode: boolean;
  skills: string[];
}

const YourSkills: React.FC<YourSkillsProps> = ({ isDarkMode, skills }) => (
  <Card className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}>
    <CardHeader>
      <CardTitle>Your Skills</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default YourSkills;
