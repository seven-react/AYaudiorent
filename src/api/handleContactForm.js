import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration (replace with your Firebase config)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handleContactForm(req, res) {
  if (req.method === "POST") {
    const { firstName,lastName,phone, email,dateNeeded, message,selectedOptions,delivery_address,equipment } = req.body;

    try {
      // Add submission to Firestore
      const docRef = await addDoc(collection(db, "contactSubmissions"), {
        firstName,
        lastName,
        phone,
        email,
        message,
        dateNeeded,
        selectedOptions,
        delivery_address,
        equipment,
        timestamp: serverTimestamp(),
      });

      console.log("Document written with ID:", docRef.id);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error adding document:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}

