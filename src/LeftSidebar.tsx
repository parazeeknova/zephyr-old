import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const myGroups = [
  { name: "Picktab Studio", icon: "🎨" },
  { name: "Aksantra Digital", icon: "🚀" },
  { name: "Design Jam Indonesia", icon: "🇮🇩" },
  { name: "The Design Thinker", icon: "💡" },
];

const friends = [
  { name: "Jelly Rendi", status: "online" },
  { name: "Ali Haiqi", status: "online" },
  { name: "Kurnialan", status: "online" },
  { name: "Syah Fatah", status: "online" },
  { name: "Mindas Kidian", status: "online" },
  { name: "Budi Doremi", status: "online" },
  { name: "Zidanko", status: "online" },
  { name: "Keanu Satria", status: "offline", lastSeen: "6 min" },
  { name: "Dhimas Rasjad", status: "offline", lastSeen: "9 min" },
  { name: "Arvin Andhika", status: "offline", lastSeen: "15 min" },
  { name: "Jamet Tinkling", status: "offline", lastSeen: "23 min" },
];

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 space-y-4">
      <Card className="p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-500">MY GROUP</h2>
          <MoreHorizontal className="h-5 w-5 text-gray-400" />
        </div>
        <ul className="space-y-3">
          {myGroups.map((group, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-lg">
                {group.icon}
              </div>
              <span className="text-sm font-medium">{group.name}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-500">FRIENDS</h2>
          <MoreHorizontal className="h-5 w-5 text-gray-400" />
        </div>
        <ScrollArea className="h-[calc(100vh-250px)]">
          <ul className="space-y-3">
            {friends.map((friend, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://i.pravatar.cc/32?u=${friend.name}`} alt={friend.name} />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{friend.name}</span>
                </div>
                {friend.status === "online" ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                ) : (
                  <span className="text-xs text-gray-400">{friend.lastSeen}</span>
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </Card>
    </aside>
  );
};

export default LeftSidebar;
