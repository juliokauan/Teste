const titulo = document.querySelector("#titulo");
const alterarTitulo = document.querySelector("#alterarTitulo");
const alterarCor = document.querySelector("#alterarCorTitulo");

alterarTitulo.addEventListener("click", () => {
    const novoTitulo = window.prompt("Digite o novo titulo");
    titulo.textContent = novoTitulo;
})

alterarCor.addEventListener("click", () => {
    const novaCor = window.prompt("Digite a cor em Hexadecimal");
    titulo.style.color = novaCor;
})