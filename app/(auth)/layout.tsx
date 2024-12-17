// src/app/(auth)/layout.tsx
'use client';

import { ReactNode } from 'react';
import { useFirebase } from '@/lib/firebase/context';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  const { user, loading } = useFirebase();
  const router = useRouter();

  // If the authentication state is still loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is already authenticated, redirect to the welcome page
  if (user) {
    router.push('/welcome');
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  );
}
