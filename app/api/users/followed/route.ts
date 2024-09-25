import { validateRequest } from '@/BE/auth';
import prisma from '@/lib/prisma';
import { getUserDataSelect } from '@/lib/types';

export async function GET() {
  try {
    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const followedUsers = await prisma.user.findMany({
      where: {
        followers: {
          some: {
            followerId: user.id,
          },
        },
      },
      select: getUserDataSelect(user.id),
    });

    return Response.json(followedUsers);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
