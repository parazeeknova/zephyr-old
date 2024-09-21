import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import signupImage from '@/assets/signup-image.jpg';
import SignUpForm from '@/CW/authPage/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function SignupPage() {
  return (
    <div className="relative flex min-h-screen bg-background">
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 lg:block">
        <h1 className="rotate-90 transform whitespace-nowrap text-7xl font-bold text-primary opacity-25 lg:text-9xl">
          SIGN UP
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
        <div className="relative z-10 flex min-h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-xl lg:flex-row">
          <div className="flex w-full flex-col justify-center p-6 sm:p-8 lg:w-1/2">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary sm:mb-4 sm:text-4xl">
              Launch Your Journey
            </h2>
            <SignUpForm />

            <div className="flex flex-col items-center justify-center">
              <Link href="/login" className="text-sm text-primary hover:underline">
                Already have an account? Login
              </Link>
            </div>
          </div>
          <div className="relative hidden w-1/2 bg-primary lg:block">
            <div className="relative h-full w-full">
              <Image
                src={signupImage}
                alt="Signup illustration"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 left-2 text-8xl font-bold text-primary opacity-50 sm:bottom-4 sm:left-4 sm:text-6xl">
        ZEPHYR.
      </div>
      <div
        className="absolute left-0 top-0 hidden h-full w-1/2 bg-cover bg-center opacity-10 lg:block"
        style={{ backgroundImage: `url(${signupImage.src})` }}
      ></div>
    </div>
  );
}
