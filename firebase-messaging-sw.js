// Import the Firebase SDK scripts inside the worker environment
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Initialize the Firebase app inside the service worker
const firebaseConfig = {
  apiKey: "AIzaSyCjP2QjWeaWDh9HH3TdHO51iI2PcuGmi_w",
  authDomain: "notification-test-62210.firebaseapp.com",
  projectId: "notification-test-62210",
  storageBucket: "notification-test-62210.firebasestorage.app",
  messagingSenderId: "108631522148",
  appId: "1:108631522148:web:f68e1991209b6e5e099871"
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
