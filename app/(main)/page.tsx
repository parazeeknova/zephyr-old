import ZephyrHomePage from '@/FP/Homepage';
import prisma from '@/lib/prisma';
import { postDataInclude } from '@/lib/types';

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <main>
        <ZephyrHomePage posts={posts} />
      </main>
    </>
  );
}
