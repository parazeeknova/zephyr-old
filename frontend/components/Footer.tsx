'use client';

import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';

import { Dock, DockIcon } from '@/components/magicui/dock';
import { Meteors } from '@/CW/Meteors';

const Footer = () => {
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
      className="relative overflow-hidden bg-card px-4 py-12 text-card-foreground shadow-lg md:px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={14} />
      </div>
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row">
          <div className="flex flex-col items-start">
            <div className="mb-4 text-3xl font-bold text-primary">Zephyr.</div>
            <div className="flex items-center">
              <Dock direction="middle">
                <DockIcon>
                  <FaFacebook className="size-6 text-muted-foreground hover:text-primary" />
                </DockIcon>
                <DockIcon>
                  <FaTwitter className="size-6 text-muted-foreground hover:text-primary" />
                </DockIcon>
                <DockIcon>
                  <FaGithub className="size-6 text-muted-foreground hover:text-primary" />
                </DockIcon>
                <DockIcon>
                  <FaWhatsapp className="size-6 text-muted-foreground hover:text-primary" />
                </DockIcon>
              </Dock>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <FooterColumn
              title="GO"
              links={['Integrations', 'Help Center', 'Pricing']}
              itemVariants={itemVariants}
            />
            <FooterColumn
              title="COMPANY"
              links={['About Us', 'Blog', 'Case Studies', 'Talk to Sales', 'Support']}
              itemVariants={itemVariants}
            />
            <FooterColumn
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
        <FooterBottom itemVariants={itemVariants} />
      </div>
    </motion.footer>
  );
};

const FooterColumn: React.FC<{
  title: string;
  links: string[];
  itemVariants: Variants;
}> = ({ title, links, itemVariants }) => (
  <motion.div variants={itemVariants}>
    <h3 className="mb-4 font-bold text-muted-foreground">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <Link href="/" className="text-muted-foreground hover:text-primary hover:underline">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FooterBottom: React.FC<{ itemVariants: Variants }> = ({ itemVariants }) => (
  <motion.div
    variants={itemVariants}
    className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row"
  >
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} Zephyr — Terms & Privacy Policy
    </p>
    <div className="mt-4 flex items-center md:mt-0">
      <span className="mr-2 text-sm text-muted-foreground">MADE WITH</span>
      <svg
        className="h-6 w-6 text-primary"
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
