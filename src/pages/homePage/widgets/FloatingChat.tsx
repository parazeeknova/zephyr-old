import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';

interface FloatingChatProps {
  isDarkMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsChatOpen: (value: boolean) => void;
}

export const FloatingChat: React.FC<FloatingChatProps> = ({
  isDarkMode,
  setIsChatOpen,
}) => {
  return (
    <Card
      className={`fixed bottom-20 right-4 w-80 h-96 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}
    >
      <CardHeader
        className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex justify-between items-center`}
      >
        <h3 className="font-semibold">Chat</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100%-8rem)] p-4">
          {/* Chat messages would go here */}
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
            No messages yet.
          </p>
        </ScrollArea>
      </CardContent>
      <CardFooter
        className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
      >
        <Input
          placeholder="Type a message..."
          className={
            isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'
          }
        />
      </CardFooter>
    </Card>
  );
};

export default FloatingChat;
