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
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={data.avatar} alt={data.name} width={64} height={64} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{data.role}</p>
        </div>
      </div>
      <div className="flex justify-evenly mb-4">
        <div>
          <p className="text-sm font-semibold">Followers</p>
          <p className="text-lg pl-2">{data.followers.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Following</p>
          <p className="text-lg pl-3">{data.following.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Aura</p>
          <p className="text-lg pl-1">{data.aura}</p>
        </div>
      </div>
      <p className={`text-sm mb-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {data.bio}
      </p>
      <div className="flex justify-center items-center">
        <Button className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white mb-2">
          Edit Profile
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-1 mt-2">
        {data.socialMedia.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-full justify-evenly ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
          >
            {social.platform === 'Twitter' && <TwitterIcon className="h-2 w-2 mr-2" />}
            {social.platform === 'Instagram' && <InstagramIcon className="h-2 w-2 mr-2" />}
            {social.platform === 'GitHub' && <GitHubIcon className="h-2 w-2 mr-2" />}
            {social.platform === 'Reddit' && <RedditIcon className="h-2 w-2 mr-2" />}
            <span>{social.username}</span>
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
