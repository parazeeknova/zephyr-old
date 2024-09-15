'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  isDarkMode: boolean;
  avatarSrc: string;
  username: string;
  profession: string;
  followers: number;
  following: number;
  aura: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  isDarkMode,
  avatarSrc,
  username,
  profession,
  followers,
  following,
  aura,
}) => (
  <Card className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}>
    <CardContent className="p-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <div
            className={`w-20 h-20 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-2xl overflow-hidden`}
          >
            <Image
              src={avatarSrc}
              alt="Profile background"
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
          </div>
          <Avatar
            className={`absolute -bottom-2 -right-2 w-12 h-12 border-4 ${isDarkMode ? 'border-gray-700' : 'border-white'}`}
          >
            <AvatarImage src={avatarSrc} alt={`${username}'s avatar`} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="font-bold text-lg flex items-center">
            <Link href="/profile">
              {username} <span className="ml-1 text-blue-500">✓</span>
            </Link>
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {profession}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{followers}K</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Followers</p>
        </div>
        <div>
          <p className="font-bold">{following}K</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Following</p>
        </div>
        <div>
          <p className="font-bold">{aura}</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aura</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
