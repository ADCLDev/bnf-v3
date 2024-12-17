// lib/firebase/auth.ts
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  User,
  UserCredential,
  AuthError as FirebaseAuthError,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';

// Define a custom AuthError type
export interface AuthError {
  code: string;
  message: string;
}

// Authentication service
export const authService = {
  // Sign up with email and password
  async signUp(email: string, password: string): Promise<UserCredential> {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role: 'user', // Default role
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      return userCredential;
    } catch (error) {
      // Handle and rethrow errors
      const authError = error as FirebaseAuthError;
      throw {
        code: authError.code,
        message: authError.message,
      } as AuthError;
    }
  },

  // Sign in with email and password
  async signIn(email: string, password: string): Promise<UserCredential> {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle and rethrow errors
      const authError = error as FirebaseAuthError;
      throw {
        code: authError.code,
        message: authError.message,
      } as AuthError;
    }
  },

  // Sign in with Google
  async signInWithGoogle(): Promise<UserCredential> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      // Check if user document exists in Firestore, if not create it
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: userCredential.user.email,
          role: 'user', // Default role
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      return userCredential;
    } catch (error) {
      // Handle and rethrow errors
      const authError = error as FirebaseAuthError;
      throw {
        code: authError.code,
        message: authError.message,
      } as AuthError;
    }
  },

  // Sign out
  async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      // Handle and rethrow errors
      const authError = error as FirebaseAuthError;
      throw {
        code: authError.code,
        message: authError.message,
      } as AuthError;
    }
  },

  // Reset password
  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      // Handle and rethrow errors
      const authError = error as FirebaseAuthError;
      throw {
        code: authError.code,
        message: authError.message,
      } as AuthError;
    }
  },

  // Get current user
  getCurrentUser(): User | null {
    return auth.currentUser;
  },

  // Listen to auth state changes
  onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return auth.onAuthStateChanged(callback);
  },
};

export default authService;
