'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Experience from '@/CW/ProfileRightSideBar/experienceProfile';

const ProfileCard: React.FC = () => (
  <Card className="sticky top-8">
    <CardContent className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/Banner.png?height=64&width=64&text=JW" />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">Parazeeknova</h2>
          <p className="text-gray-600">Pesky Corp CEO</p>
        </div>
      </div>
      <div className="flex justify-evenly mb-4">
        <div>
          <p className="text-sm font-semibold">Followers</p>
          <p className="text-lg pl-2">1,234</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Following</p>
          <p className="text-lg pl-3">567</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Aura</p>
          <p className="text-lg pl-1">69</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Experienced Programmer with a strong background in Peskyness, programming and designing.
      </p>
      <div className="flex justify-center items-center">
        <Button className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white mb-2">
          Edit Profile
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-1 mt-2">
        {[
          { icon: TwitterIcon, username: '@hashcodes_' },
          { icon: InstagramIcon, username: '@hashcodes' },
          { icon: GitHubIcon, username: 'parazeeknova' },
          { icon: RedditIcon, username: 'u/parazeeknova' },
        ].map((social, index) => (
          <Button key={index} variant="outline" size="sm" className="w-full justify-evenly">
            <social.icon className="h-2 w-2 mr-2" />
            <span>{social.username}</span>
          </Button>
        ))}
      </div>
      <Experience />
    </CardContent>
  </Card>
);

export default ProfileCard;
