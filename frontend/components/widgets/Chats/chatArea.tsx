'use client';

import Image from 'next/image';
import React from 'react';

import { Chat } from '@/CW/Chats/types';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatAreaProps {
  chat: Chat;
  messages: Message[];
  isDarkMode: boolean;
  onSendMessage: (message: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, isDarkMode, onSendMessage }) => {
  const [inputMessage, setInputMessage] = React.useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col rounded-xl shadow-md overflow-hidden max-h-[calc(100vh-70px)] ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`}
    >
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4 max-w-xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'Sam' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex ${
                  message.sender === 'Sam' ? 'flex-row-reverse' : 'flex-row'
                } items-end space-x-2`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={message.sender === 'Sam' ? '/user-boyalt-default.png' : '/useriii.jpg'}
                    alt={`${message.sender} Avatar`}
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className={`p-3 rounded-lg max-w-[70%] ${
                    message.sender === 'Sam'
                      ? 'bg-orange-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-white'
                        : 'bg-white text-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'Sam'
                        ? 'text-orange-200'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-[500px] flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Enter a prompt here..."
              className={`flex-1 p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              }`}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 rounded-lg bg-orange-500 text-white"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
