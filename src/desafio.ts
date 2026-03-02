import promptSync from 'prompt-sync';
const prompt = promptSync();

// Tipagem forte - variáveis para nossos menus.
let menuPrincipal: Number = -1;
let subMenu: Number = -1;

// Variáveis para guardar os dados dos nossos 3 temas
// prateleira do estoque vazia esperando caixas
let estoque: String[] =[]; 
// folha do log historico das consultas
let historicoIMC: String[] =[]; 
// valor inicial do dólar
let cotacaoDolar: number = 5.00; 

// os 3 themas roda aqui dentro
do {
    console.log("\n       MENU PRINCIPAL");
    console.log("1. Gestor de stock");
    console.log("2. Calculadora de IMC");
    console.log("3. Conversor de moedas");
    console.log("0. Sair do programa");

    menuPrincipal = Number(prompt("Escolha um tema: "));

    // Direciona o usuário para o tema escolhido
    switch(menuPrincipal) {
        
        case 1: // TEMA 1: GESTOR DE STOCK (ESTOQUE)
            do {
                console.log("\n   Gestor de stock ");
                console.log("1. Adicionar item | 2. Listar itens | 3. Remover item | 0. Voltar");
                subMenu = Number(prompt("Escolha uma opção: "));

                switch(subMenu) {
                    case 1:
                        let novoItem: string = prompt("Digite o nome do item para adicionar: ");
                        estoque.push(novoItem); // Coloca o item dentro da nossa "prateleira" (array)
                        console.log(`${novoItem} adicionado com sucesso!`);
                        break;
                    case 2:
                        console.log("\nItens no estoque:");
                        // Mostra todos itens das prateleiras
                        if(estoque.length === 0) {
                            console.log("O estoque está vazio.");
                        } else {
                            for(let i = 0; i < estoque.length; i++) {
                                console.log(`- ${estoque[i]}`);
                            }
                        }
                        break;
                    case 3:
                        let itemRemover: string = prompt("Digite o nome exato do item para remover: ");
                        let index: number = estoque.indexOf(itemRemover); // Procura a posição do item de acordo com o nome
                        if(index !== -1) {
                            estoque.splice(index, 1); // Acha a posição dele no array e elimina so ele (1 item)
                            console.log("Item removido!");
                        } else {
                            console.log("Item não encontrado.");
                        }
                        break;
                    case 0:
                        console.log("Saindo do gestor de stock...");
                        break;
                    default:
                        console.log("Opção inválida no estoque.");
                }
            } while(subMenu !== 0); // Fica preso nesse tema até a pessoa digitar 0.
            break;

        case 2: // TEMA 2: CALCULADORA DE IMC
            do {
                console.log("\n    Calculadora de IMC");
                console.log("1. Novo cálculo | 2. Histórico de consultas | 0. Voltar");
                subMenu = Number(prompt("Escolha uma opção: "));

                switch(subMenu) {
                    // calculo
                    case 1:
                        // captura
                        let peso: number = Number(prompt("Digite seu peso (kg): "));
                        let altura: number = Number(prompt("Digite sua altura (ex: 1.75): "));
                        
                        // calcula
                        let imc: number = peso / (altura * altura);
                        let resultado: string = `IMC: ${imc.toFixed(2)}`;
                        
                        // mostra
                        console.log(`O seu ${resultado}`);
                        historicoIMC.push(resultado); 
                        break;
                        // display h. consulta
                    case 2:
                        console.log("\nHistórico de IMC:");
                        if(historicoIMC.length === 0) {
                            console.log("Nenhum cálculo feito ainda.");
                        } else {
                            for(let i = 0; i < historicoIMC.length; i++) {
                                console.log(`Consulta ${i + 1}: ${historicoIMC[i]}`);
                            }
                        }
                        break;
                    // sair
                    case 0:
                        console.log("Saindo da calculadora...");
                        break;
                    default:
                        console.log("Opção inválida no IMC.");
                }
            } while(subMenu !== 0);
            break;

        case 3: // TEMA 3: CONVERSOR DE MOEDAS
            do {
                // Display visual do menu
                console.log(`\n    Conversor de moedas (Cotação atual: R$ ${cotacaoDolar.toFixed(2)}) `);
                console.log("1. BRL para USD | 2. USD para BRL | 3. Alterar cotação | 0. Voltar");
                subMenu = Number(prompt("Escolha uma opção: "));

                // Direcionamento do menu de escolha da conversão para sua ação especifica 
                switch(subMenu) {
                    // RS para US
                    case 1:
                        let reais: number = Number(prompt("Quantos Reais (BRL) você quer converter? R$ "));
                        let conversaoParaDolar: number = reais / cotacaoDolar;
                        console.log(`R$ ${reais} equivalem a US$ ${conversaoParaDolar.toFixed(2)}`);
                        break;
                    // US para RS
                    case 2:
                        let dolares: number = Number(prompt("Quantos Dólares (USD) você quer converter? US$ "));
                        let conversaoParaReal: number = dolares * cotacaoDolar;
                        console.log(`US$ ${dolares} equivalem a R$ ${conversaoParaReal.toFixed(2)}`);
                        break;
                    // Edição dos pesos do dinheiro
                    case 3:
                        let novaCotacao: number = Number(prompt("Digite o novo valor de 1 Dólar em Reais: R$ "));
                        cotacaoDolar = novaCotacao; // Apaga o preço velho da plaquinha e escreve o novo
                        console.log(`Cotação atualizada para R$ ${cotacaoDolar.toFixed(2)}`);
                        break;
                    // exit :D
                    case 0:
                        console.log("Saindo do conversor...");
                        break;
                    // proteção de erro de digitação
                    default:
                        console.log("Opção inválida no Conversor.");
                }
            } while(subMenu !== 0);
            break;

        case 0: // Acaba com todos os temas
            console.log("Desligando o sistema. Até logo!");
            break;

        default: // Caso a pessoa digite batata ou um número que não é 0, 1, 2, 3.
            console.log("Ocorreu algum erro inesperado no seu input :D. Tente 1, 2, 3 ou 0.");
    }

} while(menuPrincipal !== 0);

// npx ts-node src/desafio.ts