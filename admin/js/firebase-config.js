// =====================================================
// CONFIGURAÇÃO DO FIREBASE - MV SOLAR CRM
// =====================================================
// INSTRUÇÕES:
// 1. Acesse https://console.firebase.google.com
// 2. Crie um novo projeto (ou use existente)
// 3. Vá em "Adicionar app" > "Web" (</>)
// 4. Copie o objeto firebaseConfig abaixo
// 5. Substitua os valores abaixo pelos seus
// 6. No Firestore, crie as coleções: leads, activities
// 7. Em Authentication, habilite "E-mail/senha"
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyAt90VAD1NX3tmFzS2e6LVmDOdoBjWyCFc",
  authDomain: "mv-solar-crm.firebaseapp.com",
  projectId: "mv-solar-crm",
  storageBucket: "mv-solar-crm.firebasestorage.app",
  messagingSenderId: "560635878700",
  appId: "1:560635878700:web:609aca3deebec7ea0ba089",
  measurementId: "G-RM4KF40VEZ"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Timestamp do Firestore
const Timestamp = firebase.firestore.Timestamp;
