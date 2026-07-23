// Configuração de Login Direta e Segura - MV Solar CRM
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorEl = document.getElementById('loginError');
    const btn = loginForm.querySelector('button');

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sucesso no login: Redireciona usando caminho absoluto da raiz
        window.location.replace('/admin/dashboard.html');
      })
      .catch(err => {
        console.error("Erro no login:", err);
        errorEl.textContent = 'E-mail ou senha inválidos. Verifique os dados.';
        errorEl.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = 'Entrar';
      });
  });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
      window.location.replace('/admin/login.html');
    });
  });
}
