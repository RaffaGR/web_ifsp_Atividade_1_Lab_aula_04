input:Number = 0;

do{
    switch(){
        // escolha um tema = input
        case 1:
            do{
                switch(){
                    // Gerador de stock
                    // 1. Adicionar item; 2. Listar itens; 3. Remover item; 0. Sair
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                }
            }while(input = "sair T1");
            break;
        case 2:
            do{
                switch(){
                    // Calculadora de IMC
                    // 1. Novo Cálculo; 2. Histórico de Consultas;0. Sair
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                }
            }while(input = "T2 finish");
            break;
        case 3:
            do{
                switch(){
                    // Conversor de Moedas
                    // 1. BRL para USD; 2. USD para BRL; 3.Alterar Cotação; 0. Sair
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                }
            }while(input = "CM");
            break;
        default:
            console.log("Ocorreu algum erro inesperado no seu input :D");
    }
}while(input = 0);