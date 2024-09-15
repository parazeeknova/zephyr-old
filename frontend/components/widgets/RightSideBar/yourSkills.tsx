'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface YourSkillsProps {
  isDarkMode: boolean;
  skills: string[];
}

const YourSkills: React.FC<YourSkillsProps> = ({ isDarkMode, skills }) => (
  <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
    <CardHeader>
      <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>Your Skills</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant={isDarkMode ? 'outline' : 'secondary'}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default YourSkills;
