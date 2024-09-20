import { redirect } from 'next/navigation';

import { validateRequest } from '@/BE/auth';
import SessionProvider from '@/BE/SessionProvider';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await validateRequest();

  if (!session.user) redirect('/login');

  return <SessionProvider value={session}>{children}</SessionProvider>;
}
