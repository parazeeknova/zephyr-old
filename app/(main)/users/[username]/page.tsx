import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import { validateRequest } from '@/BE/auth';
import prisma from '@/lib/prisma';
import { getUserDataSelect } from '@/lib/types';

import ProfileContent from './ProfileContent';

interface PageProps {
  params: { username: string };
}

const getUser = cache(async (username: string, loggedInUserId: string) => {
  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
        mode: 'insensitive',
      },
    },
    select: getUserDataSelect(loggedInUserId),
  });

  if (!user) notFound();

  return user;
});

export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
  const { user: loggedInUser } = await validateRequest();

  if (!loggedInUser) return {};

  const user = await getUser(username, loggedInUser.id);

  return {
    title: `${user.displayName} (@${user.username})`,
    description: `Profile page of ${user.displayName}`,
  };
}

export default async function Page({ params: { username } }: PageProps) {
  const { user: loggedInUser } = await validateRequest();

  if (!loggedInUser) {
    return <p className="text-destructive">You&apos;re not authorized to view this page.</p>;
  }

  await getUser(username, loggedInUser.id);

  return <ProfileContent username={username} />;
}
