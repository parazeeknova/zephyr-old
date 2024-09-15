'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`mt-12 py-8 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <motion.div variants={itemVariants} className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">Zephyr.</h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Connecting people, one post at a time.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Quick Links
            </h3>
            <ul className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {['About Us', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <motion.li
                  key={item}
                  className="mb-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href="#" className="hover:text-orange-500">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/3">
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Stay Connected
            </h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <motion.div key={social} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <SocialIcon name={social} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className={`mt-8 pt-8 border-t ${
            isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
          } text-center text-sm`}
        >
          © {new Date().getFullYear()} Zephyr. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  const icons = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>,
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name as keyof typeof icons]}
    </svg>
  );
};

export default Footer;
