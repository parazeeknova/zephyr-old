'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

interface ScrollUpButtonProps {
  isVisible: boolean;
}

const ScrollUpButton: React.FC<ScrollUpButtonProps> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-20 right-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="group relative h-16 w-16 overflow-hidden rounded-full bg-orange-500 p-2 transition-all duration-300 hover:bg-orange-600"
        onClick={scrollToTop}
      >
        <ArrowUp className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform text-gray-200 transition-all duration-300 group-hover:translate-y-[-200%]" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-white pr-2 text-xs font-semibold uppercase text-gray-200">
              <textPath xlinkHref="#circle">Scroll Up • Scroll Up • Scroll Up •</textPath>
            </text>
          </svg>
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ScrollUpButton;
