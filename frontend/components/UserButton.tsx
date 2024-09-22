'use client';

import { useQueryClient } from '@tanstack/react-query';
import {
  Check,
  ChevronDown,
  LogOutIcon,
  Monitor,
  Moon,
  SettingsIcon,
  Sun,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { logout } from '@/(auth)/actions';
import { useSession } from '@/BE/SessionProvider';
import UserAvatar from '@/C/UserAvatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();
  const { theme, setTheme } = useTheme();
  const queryClient = useQueryClient();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn('flex-none rounded-full', className)}>
          <ChevronDown className="h-4 w-4" />
          <UserAvatar avatarUrl={user.avatarUrl} size={40} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">@{user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/profile/${user.username}`}>
            <UserIcon className="mr-2 size-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Monitor className="mr-2 size-4" />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <Monitor className="mr-2 size-4" />
                <span>System</span>
                {theme === 'system' && <Check className="ml-auto size-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 size-4" />
                <span>Light</span>
                {theme === 'light' && <Check className="ml-auto size-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 size-4" />
                <span>Dark</span>
                {theme === 'dark' && <Check className="ml-auto size-4" />}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <SettingsIcon className="mr-2 size-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            queryClient.clear();
            logout();
          }}
        >
          <LogOutIcon className="mr-2 size-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
