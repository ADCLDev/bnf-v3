'use client';

import { auth } from '@/lib/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [user] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/welcome')
    }
  }, [user, router])

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md p-8">
      <h1 className="text-2xl font-bold mb-8">Login to Your Account</h1>
      
      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
        ) : (
          <Image
            src="/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
          />
        )}
        {isLoading ? 'Connecting...' : 'Continue with Google'}
      </button>
    </div>
  )
} 