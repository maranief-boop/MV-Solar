// Configuração de Login Direta e Segura
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
      .then(() => {
        window.location.href = './dashboard.html';
      })
      .catch(err => {
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
      window.location.href = './login.html';
    });
  });
}
