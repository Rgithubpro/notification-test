// Import the Firebase SDK scripts inside the worker environment
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Initialize the Firebase app inside the service worker
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// This listener catches data-only payloads or allows custom background handling
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  
  // NOTE: If your server sends a standard "notification" object payload, 
  // FCM automatically handles displaying it. You don't strictly need to trigger 
  // showNotification manually here unless you are customizing data-only messages.
});
