'use client';

import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface TypeBarProps {
  onSendMessage: (message: string) => void;
  isDarkMode: boolean;
}

const TypeBar: React.FC<TypeBarProps> = ({ onSendMessage, isDarkMode }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="mb-4 flex w-full items-center justify-center px-4">
      <div
        className={`flex w-[500px] items-center space-x-2 rounded-xl border-t p-4 shadow-md ${
          isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}
      >
        <input
          className={`flex-1 rounded-full border p-2 ${
            isDarkMode
              ? 'border-gray-600 bg-gray-700 text-white'
              : 'border-gray-300 bg-white text-gray-900'
          }`}
          placeholder="Type in your messages..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="rounded-full bg-orange-500 p-2 text-white transition-colors duration-200 hover:bg-orange-600"
          onClick={handleSend}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TypeBar;
