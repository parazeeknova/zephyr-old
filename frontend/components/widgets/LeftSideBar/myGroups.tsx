'use client';

import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface Group {
  name: string;
  icon: string;
}

interface MyGroupsProps {
  isDarkMode: boolean;
  groups: Group[];
}

const MyGroups: React.FC<MyGroupsProps> = ({ isDarkMode, groups }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent className="p-4">
      <h2
        className={`mb-4 text-sm font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
      >
        MY GROUP
      </h2>
      <ul className="space-y-3">
        {groups.map((group, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div
              className={`h-8 w-8 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-lg`}
            >
              {group.icon}
            </div>
            <span
              className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {group.name}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default MyGroups;
