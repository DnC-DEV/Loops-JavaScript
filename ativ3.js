/*Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. 
Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99.*/
const prompt = require('prompt-sync')();

    let idade, idadeMenor = 0, idadeMaior = 0

    while (idade!=-99){
        idade = Number(prompt('Digite sua idade: -99 para fechar o programa.'));
        if(idade<22 && idade>0){
            idadeMenor++
        }
            if(idade>49){
                idadeMaior++
            }
    }

                console.log(`${idadeMenor} Pessoas tem a idade menor que 21 anos.`);
                console.log(`${idadeMaior} Pessoas tem a idade maior que 50 anos.`)