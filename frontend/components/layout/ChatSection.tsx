'use client';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useMemo, useCallback } from 'react';

import ChatArea from '@/CW/Chats/chatArea';
import SharedFiles from '@/CW/Chats/sharedFile';
import SharedPhotos from '@/CW/Chats/sharedPhoto';
import Sidebar from '@/CW/Chats/sideBar';
import { Chat, SharedFile } from '@/CW/Chats/types';
import UploadButton from '@/CW/Chats/uploadButton';
import ProfileCard from '@/CW/RightSideBar/profileCard';

interface Message {
  id: number;
  sender: 'Sam' | 'Rebeccah';
  content: string;
  timestamp: string;
}

const ChatSection: React.FC = () => {
  const pathname = usePathname();
  const [activeChat, setActiveChat] = useState<string>('2');
  const [activeSection, setActiveSection] = useState<string>('chats');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page] = useState<number>(0);
  const [direction] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);

  const chats: Chat[] = useMemo(
    () => [
      { id: '1', name: 'David Nolan', lastMessage: 'Aaron? Are you there?' },
      { id: '2', name: 'Audrey Kelly', lastMessage: 'Ok, I will touch up this' },
      { id: '3', name: 'Brian Artemayev', lastMessage: 'Why you have that stupid idea?' },
      { id: '4', name: 'Jessica Naomi', lastMessage: 'I will handle that Aaron. Thanks!' },
      { id: '5', name: 'Alberto Greyhold', lastMessage: 'Okay fine' },
      { id: '6', name: 'Amalia Chen', lastMessage: 'Thank You!' },
      { id: '7', name: 'Rebeccha Hadisuwarno', lastMessage: 'Wazzup bro?' },
    ],
    [],
  );

  const sections: Record<string, string[]> = useMemo(
    () => ({
      chats: [],
      personal: [
        'Update profile picture',
        'Change password',
        'Set notification preferences',
        'Update billing information',
        'Manage linked accounts',
        'Set language preferences',
        'Manage email subscriptions',
      ],
      team: [
        'Project A discussion',
        'Team meeting notes',
        'Task assignments',
        'Deadline reminders',
        'Resource allocation',
        'Team performance review',
        'Upcoming events',
      ],
    }),
    [],
  );

  const sharedFiles: SharedFile[] = useMemo(
    () => [
      { type: 'ZIP', name: 'Marketing Brochure.zip', color: 'blue' },
      { type: 'PSD', name: 'Merchandise.psd', color: 'purple' },
      { type: 'AI', name: 'Logo.ai', color: 'orange' },
    ],
    [],
  );

  const sharedPhotos = useMemo(
    () => [
      '/placeholderi.jpg',
      '/placeholderii.jpg',
      '/placeholderiii.jpg',
      '/placeholderiv.jpg',
      '/placeholderv.jpg',
      '/placeholderi.jpg',
    ],
    [],
  );

  const filteredChats = useMemo(
    () => chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [chats, searchTerm],
  );

  const currentChat = useMemo(
    () => chats.find((chat) => chat.id === activeChat) || chats[0],
    [chats, activeChat],
  );

  const profileData = useMemo(
    () => ({
      avatarSrc: '/useriii.jpg',
      username: 'Noviciusss',
      profession: 'Programmer',
      followers: 100,
      following: 10,
      aura: 1000,
    }),
    [],
  );

  useEffect(() => {
    const chatId = pathname.split('/').pop();
    if (chatId && chats.some((chat) => chat.id === chatId)) {
      setActiveChat(chatId);
    }
  }, [pathname, chats]);

  const handleSetSearchTerm = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSetActiveSection = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  const handleSetActiveChat = useCallback((chatId: string) => {
    setActiveChat(chatId);
  }, []);

  const handleSendMessage = useCallback(
    (message: string) => {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'Sam',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    },
    [messages],
  );

  useEffect(() => {
    if (currentChat) {
      setMessages([
        {
          id: 1,
          sender: 'Rebeccah',
          content: `Hi Aaron, this is ${currentChat.name}`,
          timestamp: '09:00 AM',
        },
        {
          id: 2,
          sender: 'Sam',
          content: `Hello ${currentChat.name}, how can I help you?`,
          timestamp: '09:02 AM',
        },
        {
          id: 3,
          sender: 'Rebeccah',
          content: currentChat.lastMessage,
          timestamp: '09:05 AM',
        },
      ]);
    }
  }, [currentChat]);

  return (
    <div className="flex h-screen flex-1 overflow-hidden">
      <Sidebar
        searchTerm={searchTerm}
        setSearchTerm={handleSetSearchTerm}
        activeSection={activeSection}
        setActiveSection={handleSetActiveSection}
        page={page}
        direction={direction}
        filteredChats={filteredChats}
        activeChat={activeChat}
        setActiveChat={handleSetActiveChat}
        sections={sections}
        user={{
          name: 'Rebeccah Hadisuwarno',
          initials: 'RH',
          status: 'Online',
        }}
      />
      <div className="flex flex-1 flex-col">
        <ChatArea chat={currentChat} messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="flex h-screen w-80 flex-col overflow-hidden bg-card">
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          <ProfileCard {...profileData} />
          <SharedFiles files={sharedFiles} initialDisplayCount={3} />
          <SharedPhotos photos={sharedPhotos} initialDisplayCount={6} />
          <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
