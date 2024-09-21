'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface YourSkillsProps {
  skills: string[];
}

const YourSkills: React.FC<YourSkillsProps> = ({ skills }) => (
  <Card className={`bg-white shadow-md`}>
    <CardHeader>
      <CardTitle className={`text-sm font-semibold uppercase text-gray-500`}>Your Skills</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className={`rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800 hover:bg-gray-300`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default YourSkills;
