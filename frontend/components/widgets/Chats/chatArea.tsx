'use client';

import React from 'react';

import { Chat } from '@/CW/Chats/types';

interface ChatAreaProps {
  chat: Chat;
  messages: Array<{ id: number; sender: string; content: string }>;
  isDarkMode: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, isDarkMode }) => (
  <div
    className={`flex-1 flex flex-col rounded-xl shadow-md overflow-hidden mb-1 mt-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
  >
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg max-w-[70%] ${
              message.sender === 'self'
                ? 'bg-orange-500 text-white self-end'
                : isDarkMode
                  ? 'bg-gray-700 text-white self-start'
                  : 'bg-gray-100 self-start'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ChatArea;
