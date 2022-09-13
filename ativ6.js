/*Escrever um programa que receba vários números inteiros no teclado. 
E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)*/
const prompt = require('prompt-sync')();

    let num, soma = 0, media = 0, i=0
    do {
        num = Number(prompt('Digite um numero: '));
        soma = soma + num 
        if(num%3==0){    
            i++
        }
        
    } while (num!=0);

    media = soma/(i-1);
    console.log(`\nA media dos numeros é: ${media}`);