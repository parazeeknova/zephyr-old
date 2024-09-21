'use client';

import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface TypeBarProps {
  onSendMessage: (message: string) => void;
}

const TypeBar: React.FC<TypeBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="mb-4 flex w-full items-center justify-center px-4">
      <div className="flex w-[500px] items-center space-x-2 rounded-xl border-t border-border bg-card p-4 shadow-md">
        <input
          className="flex-1 rounded-full border border-input bg-background p-2 text-foreground"
          placeholder="Type in your messages..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="rounded-full bg-primary p-2 text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
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
