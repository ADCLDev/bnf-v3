// src/app/(users)/layout.tsx
'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { useFirebase } from '@/lib/firebase/context';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: LayoutProps) {
  const { user, loading } = useFirebase();
  const router = useRouter();

  // If the authentication state is still loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
