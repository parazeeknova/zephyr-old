'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface FileNotificationProps {
  avatarInitial: string;
  avatarColor: string;
  userName: string;
  action: string;
  fileName: string;
  timeAgo: string;
  project: string;
  imageUrl: string;
  description: string;
  linkUrl: string;
  width: number;
  height: number;
}

const FileNotification: React.FC<FileNotificationProps> = ({
  avatarInitial,
  avatarColor,
  userName,
  action,
  fileName,
  timeAgo,
  project,
  imageUrl,
  description,
  linkUrl,
  width,
  height,
}) => {
  return (
    <div className="flex items-start space-x-3">
      <Avatar className={`h-8 w-8 ${avatarColor}`}>
        <AvatarFallback>{avatarInitial}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-semibold">{userName}</span> {action} {fileName}
        </p>
        <p className="text-xs text-gray-500">
          {timeAgo} • {project}
        </p>
        <div className="mt-2 p-3 rounded bg-gray-800">
          <p className="text-xs font-semibold flex items-center">
            <Image
              src={imageUrl}
              alt={`${fileName} preview`}
              className="mr-1 rounded w-15 h-15"
              width={width}
              height={height}
            />
          </p>
          <p className="text-xs mt-1 text-gray-400">{description}</p>
          <p className="text-xs text-orange-500 mt-2">Link preview</p>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <Link href={linkUrl} className="w-4 h-4 mr-1">
              {linkUrl}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileNotification;
