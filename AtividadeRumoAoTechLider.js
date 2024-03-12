let limite = 202;
let tentativa = 2;
let senha = Math.floor(Math.random() * limite);
let tentar = Math.floor(Math.random() * limite);

while (tentar != senha) {

    if (tentar < senha) {
        console.log("o numero secreto é maior que " + tentar);

    } else {
        console.log("o numero secreto é menor que " + tentar);
    }
    
    tentar = Math.floor(Math.random() * limite);
    tentativa++;
}

console.log("PARABENS VOCE ACERTOU O NUMERO " +  senha + " a " + tentativa + " tentativas");
