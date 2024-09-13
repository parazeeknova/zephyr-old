import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface OptionNotificationProps {
  avatarInitial: string;
  avatarColor: string;
  userName: string;
  action: string;
  fileName: string;
  timeAgo: string;
  project: string;
}

const OptionNotification: React.FC<OptionNotificationProps> = ({
  avatarInitial,
  avatarColor,
  userName,
  action,
  fileName,
  timeAgo,
  project,
}) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <Avatar className={h-8 w-8 ${avatarColor}}>
        <AvatarFallback>{avatarInitial}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-semibold">{userName}</span> {action} {fileName}
        </p>
        <p className="text-xs text-gray-400">{fileName}</p>
        <p className="text-xs text-gray-500">
          {timeAgo} • {project}
        </p>
        <div className="mt-2 space-x-2">
          <Button variant="outline" size="sm" className="text-xs px-3 py-1">
            Deny
          </Button>
          <Button
            size="sm"
            className="bg-orange-500 text-gray-200 text-xs px-3 py-1"
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptionNotification;