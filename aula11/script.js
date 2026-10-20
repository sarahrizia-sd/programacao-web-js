// 1. pega o título pelo id (sem o #)
const titulo = document.getElementById("titulo");

// 2. troca o texto do título
titulo.textContent = "Cadastro de Alunos";

// 3. pega o parágrafo com querySelector (com o #, como no CSS)
const mensagem = document.querySelector("#mensagem");

// 4. troca o texto do parágrafo
mensagem.textContent = "Este texto foi escrito pelo JavaScript!";

// pega a tabela (o tbody) e o parágrafo de aviso
const tabela = document.querySelector("#tabela");
const aviso = document.querySelector("#aviso");

// querySelector achou? Então tabela não é null.
// Vamos conferir escrevendo no aviso:
aviso.textContent = "Achei a tabela! Ela tem " + tabela.children.length + " linhas.";
