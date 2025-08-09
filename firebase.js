// Configuração do Firebase (substitua com suas credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyA4p1jeIMrQT4pI1p3fLO8OBRdveK0eQCg",
  authDomain: "quizzgame-9c5ee.firebaseapp.com",
  projectId: "quizzgame-9c5ee",
  storageBucket: "quizzgame-9c5ee.firebasestorage.app",
  messagingSenderId: "328947922360",
  appId: "1:328947922360:web:45adf0edf995813bce4b4d"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
