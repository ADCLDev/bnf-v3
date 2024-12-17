import { ReactNode } from 'react';
import './globals.css'
import { AuthProvider } from '@/components/providers/AuthProvider'

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Your App Name',
  description: 'Your app description',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
} 