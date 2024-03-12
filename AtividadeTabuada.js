let limite = 834;
let conta = 2092;


if (limite <= 0) {
    console.log("não podemos multiplicar por numero negativos e igual zero")
}
else if (conta % 1 !== 0 ){
    console.log ("não multiplicamos numero com virgula")
}else {

    for (let i = 1; i <= conta; i++) {
        console.log(conta + " x "  + i + " = " + conta * i);
    }
}


