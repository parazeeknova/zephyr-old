'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import Header from '@/CL/Header';
import ChatArea from '@/CW/Chats/chatArea';
import SharedFiles from '@/CW/Chats/sharedFile';
import SharedPhotos from '@/CW/Chats/sharedPhoto';
import Sidebar from '@/CW/Chats/sideBar';
import TypeBar from '@/CW/Chats/typeBar';
import { Chat, ProfileInfo, SharedFile } from '@/CW/Chats/types';
import ProfileCard from '@/CW/RightSideBar/profileCard';

// interface RightSidebarProps {
//     isDarkMode: boolean;
//   }

const ChatInterface: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeChat, setActiveChat] = useState<string>('2');
  const [activeSection, setActiveSection] = useState<string>('chats');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [messages, setMessages] = useState<Array<{ id: number; sender: string; content: string }>>(
    [],
  );

  const chats: Chat[] = useMemo(
    () => [
      { id: '1', name: 'David Nolan', lastMessage: 'Aaron? Are you there?' },
      { id: '2', name: 'Audrey Kelly', lastMessage: 'Ok, I will touch up this' },
      { id: '3', name: 'Brian Artemayev', lastMessage: 'Why you have that stupid idea?' },
      { id: '4', name: 'Jessica Naomi', lastMessage: 'I will handle that Aaron. Thanks!' },
      { id: '5', name: 'Alberto Greyhold', lastMessage: 'Okay fine' },
      { id: '6', name: 'Amalia Chen', lastMessage: 'Thank You!' },
      { id: '7', name: 'Rudi Hadisuwarno', lastMessage: 'Wazzup bro?' },
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

  const profileInfo: ProfileInfo = useMemo(
    () => ({
      name: 'Audrey Kelly',
      title: 'Graphic Designer',
      avatarUrl: '',
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
      '/Banner.png',
      '/Banner.png',
      '/Banner.png',
      '/Banner.png',
      '/Banner.png',
      '/Banner.png',
    ],
    [],
  );

  const handleSendMessage = useCallback((message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: 'self', content: message },
    ]);
  }, []);

  const filteredChats = useMemo(
    () => chats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [chats, searchTerm],
  );

  const currentChat = useMemo(
    () => chats.find((chat) => chat.id === activeChat) || chats[0],
    [chats, activeChat],
  );
  const profileData = {
    avatarSrc: '/useriii.jpg',
    username: 'Noviciusss',
    profession: 'Programmer',
    followers: 100,
    following: 10,
    aura: 100,
  };

  useEffect(() => {
    if (currentChat) {
      setMessages([
        { id: 1, sender: 'other', content: `Hi Aaron, this is ${currentChat.name}` },
        { id: 2, sender: 'self', content: `Hello ${currentChat.name}, how can I help you?` },
        { id: 3, sender: 'other', content: currentChat.lastMessage },
      ]);
    }
  }, [currentChat]);

  useEffect(() => {
    // Extract the chat ID from the pathname
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

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-1 flex overflow-hidden ">
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
            name: 'Aaron Stanley',
            initials: 'AS',
            status: 'Online',
          }}
        />
        <div className="flex-1 flex flex-col ">
          <ChatArea chat={currentChat} messages={messages} />
          <TypeBar onSendMessage={handleSendMessage} />
        </div>
        <div className="w-80 p-4 space-y-4 overflow-y-auto">
          <ProfileCard {...profileData} />
          <SharedFiles
            files={[
              { type: 'PDF', name: 'Document.pdf', color: 'red' },
              { type: 'DOC', name: 'Report.docx', color: 'blue' },
              { type: 'XLS', name: 'Spreadsheet.xlsx', color: 'green' },
              // ... more files
            ]}
            initialDisplayCount={3}
          />
          <SharedPhotos photos={sharedPhotos} initialDisplayCount={6} />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
