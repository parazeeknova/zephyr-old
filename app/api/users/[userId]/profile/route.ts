import { NextRequest } from 'next/server';

import { validateRequest } from '@/BE/auth';
import prisma from '@/lib/prisma';
import { getUserDataSelect } from '@/lib/types';

export async function GET(
  req: NextRequest,
  { params: { userId } }: { params: { userId: string } },
) {
  console.log('API route hit for userId:', userId);

  try {
    const { user: loggedInUser } = await validateRequest();

    if (!loggedInUser) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: getUserDataSelect(loggedInUser.id),
    });

    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json(user);
  } catch (error) {
    console.error('Error in profile route:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
