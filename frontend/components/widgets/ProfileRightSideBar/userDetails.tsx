'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  data: {
    name: string;
    role: string;
    avatar: string;
    followers: number;
    following: number;
    aura: number;
    bio: string;
    socialMedia: Array<{
      platform: string;
      username: string;
    }>;
  };
  isDarkMode: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data, isDarkMode }) => (
  <Card className={`sticky top-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <CardContent className="p-6">
      <div className="mb-4 flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={data.avatar} alt={data.name} width={64} height={64} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{data.role}</p>
        </div>
      </div>
      <div className="mb-4 flex justify-evenly">
        <div>
          <p className="text-sm font-semibold">Followers</p>
          <p className="pl-2 text-lg">{data.followers.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Following</p>
          <p className="pl-3 text-lg">{data.following.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Aura</p>
          <p className="pl-1 text-lg">{data.aura}</p>
        </div>
      </div>
      <p className={`mb-4 text-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {data.bio}
      </p>
      <div className="flex items-center justify-center">
        <Button className="mb-2 w-full max-w-xs bg-orange-500 text-white hover:bg-orange-600">
          Edit Profile
        </Button>
      </div>
      <div className="mb-1 mt-2 grid grid-cols-2 gap-2">
        {data.socialMedia.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-full justify-evenly ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
          >
            {social.platform === 'Twitter' && <TwitterIcon className="mr-2 h-4 w-4" />}
            {social.platform === 'Instagram' && <InstagramIcon className="mr-2 h-4 w-4" />}
            {social.platform === 'GitHub' && <GitHubIcon className="mr-2 h-4 w-4" />}
            {social.platform === 'Reddit' && <RedditIcon className="mr-2 h-4 w-4" />}
            <span>{social.username}</span>
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
