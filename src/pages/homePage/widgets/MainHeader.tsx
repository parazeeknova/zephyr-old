import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Home,
  MessageSquare,
  Bell,
  Sun,
  Moon,
  Settings,
  ChevronDown,
} from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => (
  <header
    className={`sticky top-0 z-10 flex items-center justify-between px-4 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}
  >
    <div className="flex items-center space-x-4">
      <Link to="/">
        <h1 className="text-2xl font-bold text-orange-500">Zephyr.</h1>
      </Link>
      <Button variant="ghost" size="icon">
        <Link to="/">
          <Home className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon">
        <MessageSquare className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium">Parazeeknova</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}
        >
          <DropdownMenuItem>
            <Link to="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Preferences</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

export default Header;
