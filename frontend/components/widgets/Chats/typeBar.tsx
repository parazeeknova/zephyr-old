'user client';

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
    <div className="p-4 border-t flex items-center space-x-2 rounded-xl shadow-md bg-white mb-2">
      <input
        className="flex-1 p-2 border rounded-full"
        placeholder="Type in your messages..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <Send className="w-6 h-6 text-orange-500 cursor-pointer" onClick={handleSend} />
    </div>
  );
};

export default TypeBar;
