Sorteio de Amigos

Este projeto permite adicionar nomes a uma lista e realizar um sorteio aleatório entre os nomes cadastrados.

📌 Funcionalidades

Adicionar nomes à lista.

Sortear um nome aleatório.

Exibir o nome sorteado na tela.

🛠️ Tecnologias Utilizadas

HTML

CSS

JavaScript

📋 Como Usar

Digite um nome no campo de entrada.

Clique no botão "Adicionar Amigo" para incluir o nome na lista.

Quando houver pelo menos dois nomes na lista, clique em "Sortear" para escolher um nome aleatoriamente.

🔧 Estrutura do Código

Um array (amigos) é utilizado para armazenar os nomes.

A função adicionarAmigo() adiciona um nome ao array e exibe na lista.

A função sortearAmigo() sorteia um nome aleatório e exibe o resultado.

📌 Exemplo de Código

let amigos = [];

function adicionarAmigo() {
  if (inputAmigo.value === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(inputAmigo.value);
  const itenAmigos = document.createElement("li");
  itenAmigos.innerHTML = inputAmigo.value;
  listaAmigo.appendChild(itenAmigos);
  inputAmigo.value = "";
}

function sortearAmigo() {
  if (amigos.length >= 2) {
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `Parabéns, o nome sorteado foi ${amigos[amigoSorteado]}`;
  } else {
    alert("Para sortear um nome é necessário que tenha pelo menos 2 nomes");
  }
}


📝 Autor

Desenvolvido por Juliano.

