'use server';

import { validateRequest } from '@/BE/auth';
import prisma from '@/lib/prisma';
import { userDataSelect } from '@/lib/types';

export async function getSuggestedConnections() {
  const { user } = await validateRequest();

  if (!user) return [];

  const suggestedUsers = await prisma.user.findMany({
    where: {
      NOT: {
        id: user.id,
      },
    },
    select: userDataSelect,
    take: 5,
  });

  return suggestedUsers;
}
