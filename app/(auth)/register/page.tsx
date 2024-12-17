// app/(auth)/register/page.tsx
'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from '@/lib/firebase/config';

export default function RegisterPage() {
//   const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
//       // Create user profile in Firestore
//       await setDoc(doc(db, 'users', userCredential.user.uid), {
//         email: userCredential.user.email,
//         role: 'user',
//         createdAt: new Date(),
//         profile: {
//           displayName: '',
//           avatar: '',
//         }
//       });

//       router.push('/profile');
//     } catch (error) {
//       setError('Could not create account');
//     }
//  
};

//   const handleGoogleRegister = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const userCredential = await signInWithPopup(auth, provider);
      
//       // Check if user profile exists, if not create one
//       await setDoc(doc(db, 'users', userCredential.user.uid), {
//         email: userCredential.user.email,
//         role: 'user',
//         createdAt: new Date(),
//         profile: {
//           displayName: userCredential.user.displayName || '',
//           avatar: userCredential.user.photoURL || '',
//         }
//       }, { merge: true });

//       router.push('/profile');
//     } catch (error) {
//       setError('Could not register with Google');
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold text-center">Create your account</h2>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <div className="mt-6">
          <button
            // onClick={handleGoogleRegister}
            className="w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              {/* Google Icon SVG path */}
            </svg>
            Register with Google
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-500">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}