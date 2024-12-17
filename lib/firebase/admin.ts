// lib/firebase/admin.ts
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

// Check if Firebase Admin SDK is already initialized
const apps = getApps();

// Initialize Firebase Admin SDK if not already initialized
const adminApp = !apps.length
  ? initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Replace escaped newline characters with actual newlines
      }),
      storageBucket: process.env.FIREBASE_ADMIN_STORAGE_BUCKET, // Set the storage bucket
    })
  : apps[0]; // Use the already initialized app if it exists

// Initialize Firebase Admin services
const auth = getAuth(adminApp);
const db = getFirestore(adminApp);
const storage = getStorage(adminApp);

// Export the initialized services
export { auth, db, storage };
