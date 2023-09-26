const email = document.getElementById("email");
const subscribe = document.getElementById("subscribe_btn");
const emailError = document.getElementById("email_error");
const cadastro = document.getElementById("cadastro");
const cadastrado = document.getElementById("cadastrado");

subscribe.addEventListener("click", (e) => {
  e.preventDefault();
  verificaEmail(email.value);
});

function verificaEmail(emailDigitado) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailDigitado.match(emailPattern)) {
    localStorage.setItem("Email", emailDigitado);
    emailError.style.display = "none";
    cadastro.style.display = "none";
    cadastrado.style.display = "flex";
    cadastrado.innerHTML = `<img src="assets/images/icon-success.svg" width="50px">
      <h1 class="card_titulo">Thanks for subscribing!</h1>
      <p class="card_paragrafo">A confirmation email has been sent to 
        <strong>${emailDigitado}</strong>. 
        Please open it and click the button inside to confirm your subscription.</p>
      <button class="card_btn btn_mobile" id="apagarCadastro">Dismiss message</button>`;
    const apagarEmail = document.getElementById("apagarCadastro");
    apagarEmail.addEventListener("click", () => {
      localStorage.removeItem("Email", emailDigitado);
      location.reload();
    });
  } else {
    emailError.style.display = "block";
    email.style.backgroundColor = "RGBA(255,0,0, 0.2)";
    email.style.border = "1px solid RGBA(255,0,0, 0.5)";
  }
}
