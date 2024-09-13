import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { TrendingUp, Calendar } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
}

const myGroups = [
  { name: 'Picktab Studio', icon: '🎨' },
  { name: 'Arasaka Digital', icon: '🚀' },
  { name: 'Design Jam', icon: '🌵' },
  { name: 'Figma Jam', icon: '💡' },
];

const friends = [
  { name: 'Jelly Rendi', status: 'online' },
  { name: 'Rizky Kurniawan', status: 'online' },
  { name: 'Ali Haiqi', status: 'online' },
  { name: 'Kurnialan', status: 'online' },
  { name: 'Syah Fatah', status: 'online' },
  { name: 'Mindas Kidian', status: 'online' },
  { name: 'Budi Doremi', status: 'online' },
  { name: 'Zidanko', status: 'online' },
  { name: 'Keanu Satria', status: 'offline', lastSeen: '6 min' },
  { name: 'Dhimas Rasjad', status: 'offline', lastSeen: '9 min' },
  { name: 'Arvin Andhika', status: 'offline', lastSeen: '15 min' },
  { name: 'Jamet Tinkling', status: 'offline', lastSeen: '23 min' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isDarkMode }) => (
  <aside
    className={`w-64 p-4 space-y-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
  >
    <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
      <CardContent className="p-4">
        <h2
          className={`text-sm font-semibold uppercase mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          MY GROUP
        </h2>
        <ul className="space-y-3">
          {myGroups.map((group, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center text-lg`}
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

    <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
      <CardContent className="p-4">
        <h2
          className={`text-sm font-semibold uppercase mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          FRIENDS
        </h2>
        <ScrollArea className="h-[calc(100vh-620px)] pr-4">
          <ul className="space-y-3">
            {friends.map((friend, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={`https://i.pravatar.cc/32?u=${friend.name}`}
                      alt={friend.name}
                    />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span
                    className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {friend.name}
                  </span>
                </div>
                {friend.status === 'online' ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                ) : (
                  <span
                    className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {friend.lastSeen}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </CardContent>
    </Card>

    <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
      <CardContent>
        <h2
          className={`text-sm font-semibold uppercase mb-4 mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          TRENDING TOPICS
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            <span>#TechInnovation</span>
          </li>
          <li className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>#SustainableLiving</span>
          </li>
          <li className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-purple-500" />
            <span>#ArtificialIntelligence</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}>
      <CardContent>
        <h2
          className={`text-sm font-semibold uppercase mb-4 mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          UPCOMING EVENTS
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-red-500" />
            <span>Tech Conference 2023</span>
          </li>
          <li className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-yellow-500" />
            <span>Design Meetup</span>
          </li>
          <li className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-green-500" />
            <span>Hackathon</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </aside>
);

export default Sidebar;
