'use client';

import { ChevronDown, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

import { logout } from '@/(auth)/actions';
import { useSession } from '@/BE/SessionProvider';
import UserAvatar from '@/C/UserAvatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface UserButtonProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn('flex-none rounded-full', className)}>
          <ChevronDown className="h-4 w-4" />
          <UserAvatar avatarUrl={user.avatarUrl} size={40} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/profile/${user.username}`}>
          <DropdownMenuItem>
            <UserIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SettingsIcon className="mr-2 size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            logout();
          }}
        >
          <LogOutIcon className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
