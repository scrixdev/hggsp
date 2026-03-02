importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAUzRgupz7ykTxprH6xxlq11fwH4WROyuE",
  authDomain: "strix-6e321.firebaseapp.com",
  projectId: "strix-6e321",
  storageBucket: "strix-6e321.firebasestorage.app",
  messagingSenderId: "455788434951",
  appId: "1:455788434951:web:8e865e12e8a97ae2eebca2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
