const ADMIN_BASE = '/admin/';

function redirect(path) {
  window.location.replace(ADMIN_BASE + path);
}

auth.onAuthStateChanged(user => {
  const path = window.location.pathname;
  const isLoginPage = path.includes('login.html');
  const isAdminPage = path.startsWith(ADMIN_BASE);

  if (user && isLoginPage) {
    redirect('dashboard.html');
  } else if (!user && isAdminPage && !isLoginPage) {
    redirect('login.html');
  }
});

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
      .then(() => redirect('dashboard.html'))
      .catch(err => {
        btn.disabled = false;
        btn.innerHTML = 'Entrar';
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          errorEl.textContent = 'E-mail ou senha inválidos.';
        } else if (err.code === 'auth/too-many-requests') {
          errorEl.textContent = 'Muitas tentativas. Aguarde e tente novamente.';
        } else {
          errorEl.textContent = 'Erro ao entrar. Verifique os dados.';
        }
        errorEl.style.display = 'block';
      });
  });
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => redirect('login.html'));
  });
}
