let amigos = []; //Criamos uma lista, por ter valor igual a "[]" siginifica que a variável se trata de uma lista
const inputAmigo = document.getElementById("amigo"); //Pegamos o input do HTML pelo ID
const listaAmigo = document.getElementById("listaAmigos");

function adicionarAmigo() {
    if (inputAmigo.value === "") {
        alert("Digite o nome do amigo");
        return 
    } 
    amigos.push(inputAmigo.value)
    const itenAmigos = document.createElement("li")
    itenAmigos.innerHTML = inputAmigo.value
    listaAmigo.appendChild(itenAmigos)
}

