const form = document.querySelector("#form");
const popup = document.querySelector("#container_sucesso");
const fundo = document.querySelector("#fundo_escuro");

function mostrarPopUp(mensagem) {
    popup.innerHTML = `<button id = "botao_fechar">×</button>${mensagem}`
    popup.style.display = "flex";
    fundo.classList.add("fundo_escuro");

    const botao_fechar = document.querySelector("#botao_fechar");
    botao_fechar.addEventListener("click", function () {
        popup.style.display = "none";
        fundo.classList.remove("fundo_escuro");
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const campos = ["#nome", "#email", "#telefone"];
    const temCampoVazio = campos.some((campo) => {
        return document.querySelector(campo).value.trim() === '';
    })

    if (temCampoVazio) {
        mostrarPopUp("Preencha todos os campos!");
    }
    else {
        mostrarPopUp("Formulário enviado com Sucesso!");
    }
});
