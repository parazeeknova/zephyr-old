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

const UpcomingEvents: React.FC<UpcomingEventsProps & { isCollapsed: boolean }> = ({
  events,
  isCollapsed,
}) => (
  <Card
    className={`bg-card transition-all duration-300 ease-in-out ${isCollapsed ? 'w-12 overflow-hidden' : 'w-full'}`}
  >
    <CardContent className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
      {isCollapsed ? (
        <Calendar className="h-6 w-6 text-muted-foreground" />
      ) : (
        <>
          <CardTitle className="mb-4 mt-4 flex items-center text-sm font-semibold uppercase text-muted-foreground">
            Upcoming Events
          </CardTitle>
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Calendar className={`h-4 w-4 text-primary`} />
                <span className="text-foreground">{event.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </CardContent>
  </Card>
);

export default UpcomingEvents;
