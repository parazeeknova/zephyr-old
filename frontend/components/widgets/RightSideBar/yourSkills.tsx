'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface YourSkillsProps {
  skills: string[];
}

const YourSkills: React.FC<YourSkillsProps> = ({ skills }) => (
  <Card className="bg-card shadow-md">
    <CardHeader>
      <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">
        Your Skills
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default YourSkills;
