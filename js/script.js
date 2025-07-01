// Alternar visibilidade do menu no mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Validação de formulário
  const form = document.getElementById("contato-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (nome === "" || email === "" || mensagem === "") {
        status.textContent = "Por favor, preencha todos os campos.";
        status.style.color = "red";
        return;
      }

      // Simula envio (pode ser trocado por envio real futuramente)
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.color = "green";
      form.reset();
    });
  }
});