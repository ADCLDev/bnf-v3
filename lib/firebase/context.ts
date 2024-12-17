// lib/firebase/context.ts
import { createContext, useContext } from 'react';
import { User } from 'firebase/auth';

// Extend the Firebase User type with custom properties
export interface FirebaseUser extends User {
  is_admin?: boolean;
  is_contributor?: boolean;
  is_subscriber?: boolean;
}

// Define the FirebaseContextType
export interface FirebaseContextType {
  user: FirebaseUser | null; // Current authenticated user with custom properties
  loading: boolean; // Indicates whether the authentication state is still loading
}

// Create the FirebaseContext with default values
export const FirebaseContext = createContext<FirebaseContextType>({
  user: null,
  loading: true,
});

// Custom hook to use the FirebaseContext
export const useFirebase = () => useContext(FirebaseContext);
