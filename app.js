let amigos = []; // Criamos uma lista

const inputAmigo = document.querySelector("#amigo"); // Pegamos o input do HTML pelo ID
const listaAmigo = document.querySelector("#listaAmigos"); // Pegamos a lista pelo ID

function adicionarAmigo() {
  if (inputAmigo.value === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(inputAmigo.value);
  const itenAmigos = document.createElement("li");
  itenAmigos.innerHTML = inputAmigo.value;
  listaAmigo.appendChild(itenAmigos);

  inputAmigo.value = ""
}
