import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import loginImage from '@/assets/login-image.jpg';
import LoginForm from '@/CW/authPage/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen bg-gradient-to-bl from-orange-50 to-orange-100">
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 lg:block">
        <h1 className="-rotate-90 transform whitespace-nowrap text-7xl font-bold text-orange-500 opacity-25 lg:text-9xl">
          LOGIN
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
        <div className="relative z-10 flex min-h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-xl lg:flex-row">
          <div className="relative hidden w-1/2 bg-orange-500 lg:block">
            <div className="relative h-full w-full">
              <Image
                src={loginImage}
                alt="Login illustration"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center p-6 sm:p-8 lg:w-1/2">
            <h2 className="mb-2 text-center text-3xl font-bold text-orange-500 sm:mb-4 sm:text-4xl">
              Welcome Back
            </h2>
            <LoginForm />

            <div className="flex flex-col items-center justify-center">
              <Link href="/signup" className="text-sm text-orange-500">
                Don&apos;t have an account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 text-8xl font-bold text-orange-500 opacity-50 sm:bottom-4 sm:right-4 sm:text-6xl">
        ZEPHYR.
      </div>
      <div
        className="-z-1 absolute right-0 top-0 hidden h-full w-1/2 bg-cover bg-center opacity-10 lg:block"
        style={{ backgroundImage: `url(${loginImage.src})` }}
      ></div>
    </div>
  );
}
