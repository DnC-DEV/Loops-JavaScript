const prompt = require('prompt-sync')();

let par = 0
let impar = 0

    for(i=0; i<10; i++){
        const i = Number(prompt('Digite um valor: '));
        if(i%2==0){
            par = par+1
        }
            else{
                impar = impar+1
            }
    }
    console.clear();
    console.log(`\n${par} são numeros pares`);
    console.log(`\n${impar} são numeros impares`);