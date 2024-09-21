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
  onSendMessage: (message: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = React.useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="flex max-h-[calc(100vh-70px)] flex-1 flex-col overflow-hidden rounded-xl bg-background shadow-md">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto flex max-w-xl flex-col space-y-4">
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
                <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={message.sender === 'Sam' ? '/user-boyalt-default.png' : '/useriii.jpg'}
                    alt={`${message.sender} Avatar`}
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'Sam'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{message.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex w-[500px] items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Enter a prompt here..."
              className="flex-1 rounded-lg bg-background p-2 text-foreground"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="rounded-lg bg-primary p-2 text-primary-foreground"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
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
