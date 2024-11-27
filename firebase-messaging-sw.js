importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js");

// Firebase configuration
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
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
