'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  avatarSrc: string;
  username: string;
  profession: string;
  followers: number;
  following: number;
  aura: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarSrc,
  username,
  profession,
  followers,
  following,
  aura,
}) => (
  <Card className="bg-card shadow-md">
    <CardContent className="p-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative">
          <div className="h-20 w-20 overflow-hidden rounded-2xl bg-muted">
            <Image
              src={avatarSrc}
              alt="Profile background"
              className="h-full w-full object-cover"
              width={80}
              height={80}
            />
          </div>
          <Avatar className="absolute -bottom-2 -right-2 h-12 w-12 border-4 border-background">
            <AvatarImage src={avatarSrc} alt={`${username}'s avatar`} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="flex items-center text-lg font-bold">
            <Link href="/profile" className="text-foreground">
              {username} <span className="ml-1 text-blue-500">✓</span>
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground">{profession}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-foreground">{followers}K</p>
          <p className="text-xs text-muted-foreground">Followers</p>
        </div>
        <div>
          <p className="font-bold text-foreground">{following}K</p>
          <p className="text-xs text-muted-foreground">Following</p>
        </div>
        <div>
          <p className="font-bold text-foreground">{aura}</p>
          <p className="text-xs text-muted-foreground">Aura</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
