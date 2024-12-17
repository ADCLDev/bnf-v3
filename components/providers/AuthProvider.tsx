'use client'

import { ReactNode, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase/config'
import { FirebaseContext } from '@/lib/firebase/context'
import Cookies from 'js-cookie'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (loading) return

    const handleToken = async () => {
      try {
        if (user) {
          const token = await user.getIdToken()
          Cookies.set('firebase-token', token)
        } else {
          Cookies.remove('firebase-token')
        }
      } catch (error) {
        console.error('Error handling token:', error)
        Cookies.remove('firebase-token')
      }
    }

    handleToken()
  }, [user, loading])

  if (error) {
    console.error('Auth error:', error)
    return <div>Authentication Error</div>
  }

  return (
    <FirebaseContext.Provider value={{ user, loading }}>
      {loading ? <div>Loading...</div> : children}
    </FirebaseContext.Provider>
  )
} 