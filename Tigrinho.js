let simbolos = ['🐯', '🤑', '💸', '💰', '💎'];
let DEUGREEN = '🐯';
let moeda = 1000;
let aposta = 25;
let acertou = false;


while (!acertou) {
    console.log("Resultado:");

    let resultado1 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let resultado2 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let resultado3 = simbolos[Math.floor(Math.random() * simbolos.length)];

    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);


    if (resultado1 == DEUGREEN && resultado2 == DEUGREEN && resultado3 == DEUGREEN) {
        moeda += aposta * 5;
        console.log("TIGRIN PATROCINA, GANHOU " + moeda + " REAIS");
        acertou = true;
    } else if (moeda >= aposta) {
            console.log("COLOCA MAIS " + aposta + " REAIS QUE PAGA 💰💰");
            moeda -= aposta;
            console.log("AGORA VOCÊ TEM " + moeda + " moedas");
        } else {
            console.log("Seu saldo zerou, recarrega mais bebe");
            break;
        }
    }