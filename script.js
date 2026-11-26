const botaoSoma = document.querySelector("#botaoSomar");
const titulo = document.querySelector("#titulo");
const alterarTitulo = document.querySelector("#alterarTitulo");
const alterarCor = document.querySelector("#alterarCorTitulo");
const botaoSalvar = document.querySelector("#botaoSalvar");
const lista = document.querySelector("#atividadeLista");
const input = document.querySelector("#inputTexto");

botaoSoma.addEventListener("click", () => {
    const listaSomar = [];
    while (true) {
        const input = window.prompt("Digite um numero ou s para finalizar");
        if (input == '' || input.toLowerCase() === 's') {
            break;
        }

        let numero = parseInt(input);
        if (!isNaN(numero)) {
            listaSomar.push(numero);
        }
    }
    let soma = 0;
    for (let i = 0; i < listaSomar.length; i++) {
        soma += listaSomar[i];
    }
    window.alert(`A soma dos números é ${soma}`);
})

alterarTitulo.addEventListener("click", () => {
    const novoTitulo = window.prompt("Digite o novo titulo");
    titulo.textContent = novoTitulo;
})

alterarCor.addEventListener("click", () => {
    const novaCor = window.prompt("Digite a cor em Hexadecimal");
    titulo.style.color = novaCor;
})

botaoSalvar.addEventListener("click", () => {
    if (input.value == '') {
        return;
    }
    const item = document.createElement("li");
    const itemX = document.createElement("span");
    item.textContent = input.value;
    itemX.textContent = 'X';

    itemX.addEventListener("click", () => {
        item.remove();
    })

    item.appendChild(itemX);
    lista.appendChild(item);

    input.value = '';
})