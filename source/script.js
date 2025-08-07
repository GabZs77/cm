const loginForm = document.getElementById('loginForm');
const mainContent = document.querySelector('.main-content');
const welcomeMsg = document.getElementById('welcomeMsg');
const sidebar = document.getElementById('sidebar');
const sobre = document.getElementById('sobre');
const pvContent = document.getElementById('pvContent');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  welcomeMsg.textContent = `Seja muito bem-vindo(a), ${nome}, ao QuizzGame!`;
  document.querySelector('.login-container').classList.add('hidden');
  mainContent.classList.remove('hidden');
});

function logout() {
  location.reload();
}

function toggleSidebar() {
  sidebar.classList.toggle('hidden');
}

function showSobre() {
  sobre.classList.toggle('hidden');
}

function selectPV(area) {
  pvContent.innerHTML = `<h3>Conteúdo para ${area}</h3><p>Aqui você verá materiais e atividades relacionadas a ${area}.</p>`;
}
