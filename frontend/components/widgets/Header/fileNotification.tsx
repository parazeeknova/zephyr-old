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
        <p className="text-sm text-foreground">
          <span className="font-semibold">{userName}</span> {action} {fileName}
        </p>
        <p className="text-xs text-muted-foreground">
          {timeAgo} • {project}
        </p>
        <div className="mt-2 rounded bg-muted p-3">
          <p className="flex items-center text-xs font-semibold">
            <Image
              src={imageUrl}
              alt={`${fileName} preview`}
              className="w-15 h-15 mr-1 rounded"
              width={width}
              height={height}
            />
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          <p className="mt-2 text-xs text-primary">Link preview</p>
          <div className="mt-1 flex items-center text-xs text-muted-foreground">
            <Link href={linkUrl} className="mr-1 h-4 w-4 hover:text-foreground">
              {linkUrl}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileNotification;
