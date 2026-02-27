import promptSync from "prompt-sync";

// Inicializa a função prompt
const prompt = promptSync();

const nome: string = prompt("Digite seu nome: ");
const idade: string = prompt("Digite sua idade: ");

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// Importante: O prompt sempre retorna uma string
// Se precisar de numero, use: Number (prompt("..."));