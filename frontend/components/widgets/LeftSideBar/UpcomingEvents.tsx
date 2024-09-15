'use client';

import { Calendar } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface Event {
  name: string;
  color: string;
}

interface UpcomingEventsProps {
  isDarkMode: boolean;
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ isDarkMode, events }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
    <CardContent>
      <h2
        className={`text-sm font-semibold uppercase mb-4 mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
      >
        UPCOMING EVENTS
      </h2>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Calendar className={`h-4 w-4 ${event.color}`} />
            <span>{event.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default UpcomingEvents;
