import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreHorizontal, ImageIcon, Video, Cast } from "lucide-react";

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-80 p-4 space-y-4 overflow-y-auto">
      <Card className="p-4 shadow-md">
        <CardContent className="p-0">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden">
                <img src="/placeholder.svg?height=80&width=80" alt="Profile background" className="w-full h-full object-cover" />
              </div>
              <Avatar className="absolute -bottom-2 -right-2 w-12 h-12 border-4 border-white">
                <AvatarImage src="https://github.com/shadcn.png" alt="Kemito's avatar" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h2 className="font-bold text-lg flex items-center">
                Kemito <span className="ml-1 text-blue-500">✓</span>
              </h2>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">11K</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div>
              <p className="font-bold">1.4K</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-4 shadow-md">
        <CardContent className="p-0">
          <h3 className="font-semibold mb-2">What do you think, Kemito?</h3>
          <Textarea placeholder="Share your thoughts..." className="mb-2" />
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <ImageIcon className="w-4 h-4 mr-2" />
              Image
            </Button>
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <Video className="w-4 h-4 mr-2" />
              Video
            </Button>
          </div>
          <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
            <Cast className="w-4 h-4 mr-2" />
            Streaming
          </Button>
        </CardContent>
      </Card>

      <Card className="p-4 shadow-md">
        <CardHeader className="p-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Latest Activity</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-64">
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">ariadnakro, kurniajati,</span> and <span className="font-medium">78 others</span> liked your post
                  </p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="UI Bucket avatar" />
                  <AvatarFallback>UB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">uibucket</span> tagged you in post
                  </p>
                  <p className="text-xs text-gray-500">2m ago</p>
                  <p className="text-sm mt-1">@kemito this design is beautiful!</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jelly avatar" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Jelly</span> started following you
                  </p>
                  <p className="text-xs text-gray-500">5m ago</p>
                  <div className="flex justify-between items-center mt-2">
                    <Button variant="outline" size="sm">Discard</Button>
                    <Button size="sm">Follow Back</Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </aside>
  );
};

export default RightSidebar;
