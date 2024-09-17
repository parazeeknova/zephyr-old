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
    <div className="flex justify-center items-center w-full px-4 mb-4">
      <div
        className={`w-[500px] p-4 border-t flex items-center space-x-2 rounded-xl shadow-md ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}
      >
        <input
          className={`flex-1 p-2 border rounded-full ${
            isDarkMode
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          }`}
          placeholder="Type in your messages..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
          onClick={handleSend}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TypeBar;
