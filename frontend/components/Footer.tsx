'use client';

import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';

import { Dock, DockIcon } from '@/components/magicui/dock';
import { Meteors } from '@/CW/Meteors';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      className={`relative overflow-hidden px-4 py-12 md:px-6 ${
        isDarkMode
          ? 'bg-gray-900 text-white shadow-lg shadow-gray-800/50'
          : 'bg-gray-100 text-gray-900 shadow-lg shadow-gray-300/50'
      } rounded-t-xl`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={14} />
      </div>
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row">
          <div className="flex flex-col items-start">
            <div className="mb-4 text-3xl font-bold text-orange-500">Zephyr.</div>
            <div className="flex items-center">
              <Dock direction="middle">
                <DockIcon>
                  <FaFacebook className="size-6" />
                </DockIcon>
                <DockIcon>
                  <FaTwitter className="size-6" />
                </DockIcon>
                <DockIcon>
                  <FaGithub className="size-6" />
                </DockIcon>
                <DockIcon>
                  <FaWhatsapp className="size-6" />
                </DockIcon>
              </Dock>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <FooterColumn
              isDarkMode={isDarkMode}
              title="GO"
              links={['Integrations', 'Help Center', 'Pricing']}
              itemVariants={itemVariants}
            />
            <FooterColumn
              isDarkMode={isDarkMode}
              title="COMPANY"
              links={['About Us', 'Blog', 'Case Studies', 'Talk to Sales', 'Support']}
              itemVariants={itemVariants}
            />
            <FooterColumn
              isDarkMode={isDarkMode}
              title="SOLUTIONS"
              links={[
                'Social Community',
                'Marketplace',
                'Dating',
                'On-Demand',
                'Edu-Tech',
                'Live Streaming',
              ]}
              itemVariants={itemVariants}
            />
          </div>
        </div>
        <FooterBottom isDarkMode={isDarkMode} itemVariants={itemVariants} />
      </div>
    </motion.footer>
  );
};

const FooterColumn: React.FC<{
  title: string;
  links: string[];
  isDarkMode: boolean;
  itemVariants: Variants;
}> = ({ title, links, isDarkMode, itemVariants }) => (
  <motion.div variants={itemVariants}>
    <h3 className={`mb-4 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="#"
            className={`hover:underline ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FooterBottom: React.FC<{ isDarkMode: boolean; itemVariants: Variants }> = ({
  isDarkMode,
  itemVariants,
}) => (
  <motion.div
    variants={itemVariants}
    className={`mt-12 border-t pt-8 ${
      isDarkMode ? 'border-gray-700' : 'border-gray-300'
    } flex flex-col items-center justify-between md:flex-row`}
  >
    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      © {new Date().getFullYear()} Zephyr — Terms & Privacy Policy
    </p>
    <div className="mt-4 flex items-center md:mt-0">
      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mr-2`}>
        MADE WITH
      </span>
      <svg
        className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  </motion.div>
);

export default Footer;
