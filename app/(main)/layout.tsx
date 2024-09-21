import { redirect } from 'next/navigation';

import { validateRequest } from '@/BE/auth';
import SessionProvider from '@/BE/SessionProvider';

import Navbar from './Navbar';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await validateRequest();

  if (!session.user) redirect('/login');

  return (
    <SessionProvider value={session}>
      <div className="flex h-screen flex-col">
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
}
