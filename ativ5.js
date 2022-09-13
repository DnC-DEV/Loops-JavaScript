const prompt = require('prompt-sync')();

    let num, soma=0

    do {
        num = Number(prompt('Digite um numero: '));
        soma = soma + num
    } while (num!=0);

        console.log(`A soma dos numeros digitados é: ${soma}`);