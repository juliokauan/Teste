const botaoSalvar = document.querySelector("#botaoSalvar");
const lista = document.querySelector("#atividadeLista");
const input = document.querySelector("#inputTexto");

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