/*Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), 
e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos.*/
const prompt = require('prompt-sync')();

    let i=0, calmo=0, nervosoMulher=0, agressivoHomem=0, calmoOutros=0, nervoso40=0, calmo18=0

    while(i<150){
        let idade = Number(prompt('Digite sua idade'));
        let sexo = Number(prompt('Digite seu sexo (1-Feminino / 2-Masculino / 3-Outros) '));
        let emocao = Number(prompt('Digite uma opções (1-Calmo / 2-Nervoso / 3-Agressivo) '));

        switch (emocao){
            case 1:
                calmo++;
            if(calmo===3){
                calmoOutros++;
            }
            if(idade<18){
                calmo18++;
            }break;

                    case 2:
                    if(idade>40){
                        nervoso40++;
                    }
                    if(sexo===1){
                        nervosoMulher++;
                    }break;

                                case 3:
                                if(sexo===2){
                                    agressivoHomem++;
                                }break;
        }    
        i++;
    }
    
            console.log(`\nO numero de pessoas calmas é: ${calmo}\nO numero de mulheres nervosas é: ${nervosoMulher}\nO numero de homens agressivos é: ${agressivoHomem}\nO numero de outros calmos é: ${calmoOutros}\nO numero de pessoas nervosas com mais de 40 anos é: ${nervoso40}\nO número de pessoas calmas com menos de 18 anos é: ${calmo18}`);