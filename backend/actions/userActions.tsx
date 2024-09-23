'use server';

import { validateRequest } from '@/BE/auth';
import prisma from '@/lib/prisma';
import { getUserDataSelect } from '@/lib/types';

export async function getSuggestedConnections() {
  const { user } = await validateRequest();

  if (!user) return [];

  const suggestedUsers = await prisma.user.findMany({
    where: {
      NOT: {
        id: user.id,
      },
      followers: {
        none: {
          followerId: user.id,
        },
      },
    },
    select: getUserDataSelect(user.id),
    take: 5,
  });

  return suggestedUsers;
}
