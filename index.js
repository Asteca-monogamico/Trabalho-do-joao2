// --- 1-fazendo os materiais---
console.log("--- Exercício 1 ---");
let materiais = ["Caderno", "Lápis", "Borracha"];
materiais.push("Caneta");
materiais.push("Régua");

console.log("Estoque Atualizado da Papelaria:");
console.log(materiais);
console.log("-".repeat(30));

// ---2- fazendo a lista de chamada ---
console.log("--- Exercício 2 ---");
let alunos = ["Ana", "Carlos", "João", "Maria"];
let removido = alunos.shift(); // shift() remove o PRIMEIRO item

console.log(`O aluno ${removido} foi removido da lista.`);
console.log("Lista de chamada atual:", alunos);
console.log("-".repeat(30));

// --- 3-Fazendo o estoque ---
console.log("--- Exercício 3 ---");
let estoqueLoja = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar", "Café"];

let itensPromocao = estoqueLoja.slice(2, 5);

console.log("Lista Original:", estoqueLoja);
console.log("Itens Selecionados (Nova Lista):", itensPromocao);
console.log("-".repeat(30));

// ---4- Upgrade de Equipamento ---
console.log("--- Exercício 4 ---");
let eletronicos = ["Mouse", "Teclado", "Monitor", "Impressora"];
eletronicos[2] = "Notebook";

console.log("Lista de equipamentos final:");
console.log(eletronicos);
console.log("-".repeat(30));

// --- 5. Hortifruti  ---
console.log("--- Exercício 5 ---");
let frutas = ["Maçã", "Banana"];
let verduras = ["Alface", "Cenoura"];
// concat() ou o operador spread
let feiraCompleta = frutas.concat(verduras);

console.log("Setor de Frutas:", frutas);
console.log("Setor de Verduras:", verduras);
console.log("Carrinho total:", feiraCompleta);
console.log("-".repeat(30));

// --- 6. Boletim Escolar ---
console.log("--- Exercício 6 ---");
let notasTurma = [
    [8, 7, 9],  // Aluno 1
    [10, 6, 8], // Aluno 2
    [7, 9, 10]  // Aluno 3
];

console.log("Notas do segundo aluno:", notasTurma[1]);
console.log("Primeira nota do terceiro aluno:", notasTurma[2][0]);