/*
var time1 = 1;
var time2 = 0;
var placar;


if (time1 != -1 && time2 != -1) {

    console.log("Os times são validos.");

    if (time1 > 0 && time2 == 0) {
        console.log("O time 1 marcou um gol");
        placar = time1 > time2;
    }
    else if (time2 > 0 && time1 == 0) {
        console.log("o time 2 marcou um gol.");
        placar = time2 > time1;
    }
    else {
        console.log("Nenhum time marcou gol.");
    }

}

else {
    console.log("Os times são invalidos.");
}


switch (placar) {
    case placar = time1 > time2:
        console.log("Time 1 ganhou.");
        break;

    case placar = time2 > time1:
        console.log("Time 2 ganhou.");
        break;

    default:
        console.log("Ninguem ganhou");

}

*/


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}


for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

var a = 0;


while (a < 10) {
    a++;
    console.log(a);
}