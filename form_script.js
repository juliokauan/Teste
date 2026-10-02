const form = document.querySelector("#form");
const botao_fechar = document.querySelector("#botao_fechar");
const popup = document.querySelector("#container_sucesso");
const fundo = document.querySelector("#fundo_escuro");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    popup.style.display = "flex";
    fundo.classList.add("fundo_escuro");
});

botao_fechar.addEventListener("click", function() {
    popup.style.display = "none";
    fundo.classList.remove("fundo_escuro");
});
