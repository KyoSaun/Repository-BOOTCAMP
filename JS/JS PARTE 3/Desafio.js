/*
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/

function guardaDados() {
    var n1 = parseInt(prompt("Digite o primeiro número: "));
    var n2 = parseInt(prompt("Digite o segundo número: "));

    função(n1, n2);

}


function função(N1, N2) {

    var soma = N1 + N2;
    var GuardaVer = verificaNumeros(N1, N2);

    if (soma > 10 && soma < 20) {
        alert("Os numeros " + N1 + " e " + N2 + " " + GuardaVer + " Sua soma é " + soma + " que é maior que 10 e menor que 20");
        continuar();
    }

    else if (soma <= 10) {
        alert("Os numeros " + N1 + " e " + N2 + " " + GuardaVer + " Sua soma é " + soma + " que é menor ou igual a 10");
        continuar();
    }

    else if (soma >= 20) {
        alert("Os numeros " + N1 + " e " + N2 + " " + GuardaVer + " Sua soma é " + soma + " que é maior ou igual a 20");
        continuar();
    }

}


function continuar() {
    const cont = prompt("Deseja repetir o processo? \n 1- Sim \n 2- não");

    if (cont == 1) {
        guardaDados();
    }

    if (cont == 2) {
        alert("Volte sempre");
    }

    else {
        alert("Opção invalida, tente novamente.");
        continuar();
    }
}


function verificaNumeros(num1, num2) {
    var VerNumero = num1 == num2;

    if (VerNumero) {
        return "São iguais";
    }

    else {
        return "Não são iguais";
    }
}

guardaDados()