const botaoSoma = document.querySelector("#botaoSomar");

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