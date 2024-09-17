'use client';

import { useState } from 'react';

import Footer from '@/C/Footer';
import ChatSection from '@/CL/ChatSection';
import FloatingActionBar from '@/CL/FloatingActionBar';
import Header from '@/CL/Header';

export default function ChatPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-1 overflow-hidden">
        <ChatSection isDarkMode={isDarkMode} />
        <FloatingActionBar isDarkMode={isDarkMode} setIsChatOpen={setIsChatOpen} />
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}