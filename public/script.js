const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");
const message = document.getElementById("message");

// Alternar entre Login e Cadastro
btnLogin.onclick = () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  message.textContent = "";
};

btnRegister.onclick = () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  btnRegister.classList.add("active");
  btnLogin.classList.remove("active");
  message.textContent = "";
};

// Registrar novo usuário
function register() {
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value;

  if (!username || !password) {
    message.textContent = "Preencha todos os campos.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Verifica se o nome já existe
  if (users.find(user => user.username === username)) {
    message.textContent = "Esse nome de usuário já está em uso.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "green";
  message.textContent = "Cadastro feito com sucesso! Faça login.";
}

// Fazer login
function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    message.textContent = "Usuário ou senha incorretos.";
    return;
  }

  message.style.color = "green";
  message.textContent = `Bem-vindo(a), ${username}!`;

  // Redirecionar para a dashboard futuramente
  setTimeout(() => {
    window.location.href = "dashboard.html"; // Próxima página
  }, 1000);
}
