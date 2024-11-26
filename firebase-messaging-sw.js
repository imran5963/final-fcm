// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/9.25.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.25.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDQp8i-wb9PTnkIUmsCwn4xvcNiJCJmfS8",
    authDomain: "prodt-d73a4.firebaseapp.com",
    projectId: "prodt-d73a4",
    storageBucket: "prodt-d73a4.firebasestorage.app",
    messagingSenderId: "632677723940",
    appId: "1:632677723940:web:a8beefb2e7d9dcff6a0db1",
    measurementId: "G-YXP9GBC9G5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = firebase.messaging();

// Handle Background Messages
messaging.onBackgroundMessage(payload => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
