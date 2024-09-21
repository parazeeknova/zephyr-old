'use client';

import { Calendar } from 'lucide-react';
import React from 'react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface Event {
  name: string;
  color: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => (
  <Card className="bg-white">
    <CardContent>
      <CardTitle className="mb-4 mt-4 text-sm font-semibold uppercase text-gray-500">
        Upcoming Events
      </CardTitle>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Calendar className={`h-4 w-4 text-orange-500`} />
            <span>{event.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default UpcomingEvents;
