function gerarSenha() {
    const letras = "abcdefghijklmnopqrstuvwxyz123456789123456789%/()*"
    var senha = ""

    for (let i = 0; i < 12; i++) {
        senha = senha + letras[Math.floor(Math.random()*letras.length)]
    }

    document.querySelector('#senha').innerHTML = senha
}

function copiarSenha() {
    let inputCopy = document.createElement("input");
    inputCopy.value = document.querySelector('#senha').innerHTML;

    document.body.appendChild(inputCopy);
    inputCopy.select();

    document.execCommand('copy');
    document.body.removeChild(inputCopy);

}
