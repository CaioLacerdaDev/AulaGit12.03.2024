let limite = 910;
let tentativa = 0;
let senha = Math.floor(Math.random() * limite);
let tente = Math.floor(Math.random() * limite);

while (tente != senha) {

    if (tente < senha) {
        console.log("o numero secreto é maior que " + tente);

    } else {
        console.log("o numero secreto é menor que" + tente);
    }
    
    tente = Math.floor(Math.random() * limite);
    tentativa++;
}

console.log("PARABENS SEU NUMERO ESTA CORRETO " +  senha + " a " + tentativa + " tentativas");
