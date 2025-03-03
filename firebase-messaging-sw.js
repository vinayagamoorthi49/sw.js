// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBeZYHGbF8dua525GL8rvXVnrYJkFWHsQ8",
  authDomain: "nalam-hub-push-notification.firebaseapp.com",
  databaseURL: "https://nalam-hub-push-notification-default-rtdb.firebaseio.com",
  projectId: "nalam-hub-push-notification",
  storageBucket: "nalam-hub-push-notification.firebasestorage.app",
  messagingSenderId: "503271584326",
  appId: "1:503271584326:web:8beff0c372e77010969047",
  measurementId: "G-3535LVDXRY"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});