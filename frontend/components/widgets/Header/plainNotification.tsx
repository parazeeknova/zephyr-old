'use client';

import React from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface PlainNotificationProps {
  avatarInitial: string;
  avatarColor: string;
  userName: string;
  action: string;
  fileName?: string;
  message?: string;
  timeAgo: string;
  project: string;
  showApprovalButtons?: boolean;
}

const PlainNotification: React.FC<PlainNotificationProps> = ({
  avatarInitial,
  avatarColor,
  userName,
  action,
  fileName,
  message,
  timeAgo,
  project,
}) => {
  return (
    <div className="mb-4 flex items-start space-x-3 pt-2">
      <Avatar className={`h-8 w-8 ${avatarColor}`}>
        <AvatarFallback>{avatarInitial}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-semibold">{userName}</span> {action}
        </p>
        {fileName && <p className="text-xs text-gray-400">{fileName}</p>}
        {message && <p className="text-xs text-gray-700">{message}</p>}
        <p className="text-xs text-gray-500">
          {timeAgo} • {project}
        </p>
      </div>
    </div>
  );
};

export default PlainNotification;
