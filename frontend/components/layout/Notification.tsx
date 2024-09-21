'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import FileNotification from '@/CW/Header/fileNotification';
import OptionNotification from '@/CW/Header/optionNotification';
import PlainNotification from '@/CW/Header/plainNotification';

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'following' | 'archived'>('inbox');

  const renderNotificationContent = () => {
    switch (activeTab) {
      case 'inbox':
        return (
          <>
            <OptionNotification
              avatarInitial="D"
              avatarColor="bg-orange-500"
              userName="Dylan"
              action="has requested to edit the file"
              fileName="Astro Illustration"
              timeAgo="20 hours ago"
              project="AstroClash UI Kit"
            />
            <FileNotification
              avatarInitial="M"
              avatarColor="bg-blue-500"
              userName="Marina Niki"
              action="edited"
              fileName="Earthfund - Master"
              timeAgo="21 hours ago"
              project="AstroClash UI Kit"
              imageUrl="/Banner.png"
              width={400}
              height={200}
              description="Everything you need to make a difference. Join the EarthFund community and help us decentralize the way we tackle humanity's biggest problems."
              linkUrl="earthfund.io/technology/donate..."
            />
            <PlainNotification
              avatarInitial="D"
              avatarColor="bg-orange-500"
              userName="Dylan"
              action="has sent a message."
              message="Hi my friend how are you"
              timeAgo="20 hours ago"
              project="AstroClash UI Kit"
            />
          </>
        );
      case 'following':
        return (
          <p className="text-center text-muted-foreground">You have no following notifications</p>
        );
      case 'archived':
        return (
          <FileNotification
            avatarInitial="M"
            avatarColor="bg-blue-500"
            userName="Marina Niki"
            action="edited"
            fileName="Earthfund - Master"
            timeAgo="21 hours ago"
            project="AstroClash UI Kit"
            imageUrl="/placeholderIII.jpg"
            width={400}
            height={200}
            description="Everything you need to make a difference. Join the EarthFund community and help us decentralize the way we tackle humanity's biggest problems."
            linkUrl="earthfund.io/technology/donate..."
          />
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed right-4 top-16 z-50 w-96 overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="text-lg font-semibold uppercase text-muted-foreground">Notifications</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="bg-primary text-xs font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Mark all as read
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex border-b border-border text-sm">
            <Button
              variant="ghost"
              className={`flex-1 px-4 py-2 font-semibold ${
                activeTab === 'inbox'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('inbox')}
            >
              Inbox{' '}
              <span className="ml-1 rounded-full bg-destructive px-1.5 py-0.5 text-xs font-semibold text-destructive-foreground">
                8
              </span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 px-4 py-2 font-semibold ${
                activeTab === 'following'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('following')}
            >
              Following{' '}
              <span className="ml-1 rounded-full bg-destructive px-1.5 py-0.5 text-xs font-semibold text-destructive-foreground">
                24
              </span>
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 px-4 py-2 font-semibold ${
                activeTab === 'archived'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('archived')}
            >
              Archived
            </Button>
          </div>
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4">
            {renderNotificationContent()}
          </div>
          <div className="border-t border-border p-4">
            <Button
              variant="ghost"
              className="w-full text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              View all notifications
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
