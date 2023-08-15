const nome = "Karine Demetruk";
let nome2 = "";
let pessoaDefaut = {
    nome: "Karine Demetruk",
    idade:"31",
    trabalho: "Analista"
}

let nomes = ["Karine Demetruk", "Thassio Pauletto", "Arthur Demetruk"];
let pessoas = [];



function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2);

}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);

}


function adicionarPessoa(pessoa) {
    pessoas
}

//imprimirPessoa(pessoaDefaut);

//imprimirPessoa({
//    nome: "Marcelo Arantes",
 //   idade:"75",
 //   trabalho: "Padeiro"
//});



//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();

