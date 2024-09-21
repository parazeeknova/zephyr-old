'use client';

import React from 'react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface Group {
  name: string;
  icon: string;
}

interface MyGroupsProps {
  groups: Group[];
}

const MyGroups: React.FC<MyGroupsProps> = ({ groups }) => (
  <Card className="bg-white">
    <CardContent className="p-4">
      <CardTitle className="mb-4 text-sm font-semibold uppercase text-gray-500">
        My Groups
      </CardTitle>
      <ul className="space-y-3">
        {groups.map((group, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-lg">
              {group.icon}
            </div>
            <span className="text-sm font-medium text-gray-700">{group.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default MyGroups;
