'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FloatingChatProps {
  isDarkMode: boolean;
  setIsChatOpen: (value: boolean) => void;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ isDarkMode, setIsChatOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className={`fixed bottom-20 right-4 w-80 h-96 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          } rounded-lg shadow-lg overflow-hidden`}
        >
          <CardHeader
            className={`p-4 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            } flex justify-between items-center`}
          >
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-semibold">
              Chat
            </motion.h3>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </motion.div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100%-8rem)] p-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}
              >
                No messages yet.
              </motion.p>
            </ScrollArea>
          </CardContent>
          <CardFooter className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <Input
                placeholder="Type a message..."
                className={isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'}
              />
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingChat;
