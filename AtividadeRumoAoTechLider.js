
let tentativa = 402;
let senha = Math.floor(Math.random() * 5);
let tente = Math.floor(Math.random() * 5);

while (tente != senha) {

    if (tente < senha) {
        console.log("o numero secreto é maior que " + tente);

    } else {
        console.log("o numero secreto é menor que" + tente);
    }
    
    tente = Math.floor(Math.random() * 5);
    tentativa++;
}

console.log("PARABENS SEU NUMERO ESTA CORRETO " +  senha + " a " + tentativa + " tentativas");
