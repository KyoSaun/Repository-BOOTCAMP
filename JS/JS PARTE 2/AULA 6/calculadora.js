function calculadora() {
    const operacao = prompt("Escolha uma operação:\n 1 - Soma (+)\n 2- Substração (-)\n 3- Multiplicação (*)\n 4- Divisão real (/)\n 5- Divisão inteira (%)\n 6 - Potencialização (**) ");

    let n1 = prompt('Insira o primeiro numero:');
    let n2 = prompt('Insira o segundo numero:');
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert("A soma entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function substracao() {
        resultado = n1 - n2;
        alert("A substração entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function Multiplicacao() {
        resultado = n1 * n2;
        alert("A multiplicação entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function divInteira() {
        resultado = n1 % n2;
        alert("O resto entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function divReal() {
        resultado = n1 / n2;
        alert("A divisão entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function potencializacao() {
        resultado = n1 ** n2;
        alert("A potencialização entre " + n1 + " e " + n2 + " é igual a : " + resultado);
    }

    function NewOperacao() {
        let opcao = prompt("Deseja fazer outra operação:\n 1- Sim \n 2- não");

        if (opcao == 1 || opcao == "Sim" || opcao == "sim") {
            calculadora();
        }

        else if (opcao == 2 || opcao == "Não" || opcao == "não") {
            alert("Até a proxima.");
        }

        else {
            alert("Opção invalida, escolha uma opção valida.");
            NewOperacao();
        }

    }


    if (operacao == 1 || operacao == "Soma") {

        soma();
        NewOperacao();
    }

    else if (operacao == 2 || operacao == "Substração") {

        substracao();
        NewOperacao();
    }

    else if (operacao == 3 || operacao == "Multiplicação") {

        Multiplicacao();
        NewOperacao();
    }

    else if (operacao == 4 || operacao == "Divisão real") {

        divReal();
        NewOperacao();
    }
    else if (operacao == 5 || operacao == "Divisão inteira") {

        divInteira();
        NewOperacao();
    }
    else if (operacao == 6 || operacao == "Potencialização") {

        potencializacao();
        NewOperacao();
    }

    else {
        prompt("Operação não existente.");
        NewOperacao();
    }

}

calculadora()