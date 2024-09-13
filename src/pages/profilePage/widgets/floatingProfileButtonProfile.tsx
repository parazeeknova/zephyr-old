import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FloatingProfileButton: React.FC = () => (
  <div className="fixed bottom-8 left-8">
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 flex items-center space-x-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32&text=OB" />
          <AvatarFallback>OB</AvatarFallback>
        </Avatar>
        <span>Profile</span>
      </Button>
    </motion.div>
  </div>
);

export default FloatingProfileButton;
