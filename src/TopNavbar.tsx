import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Home, MessageSquare, Settings, ChevronDown } from "lucide-react";

const TopNavbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-orange-500">Zephyr.</h1>
        <Button variant="ghost" size="icon"><Home className="h-5 w-5" /></Button>
        <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
        <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="font-medium">Kemito</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopNavbar;
