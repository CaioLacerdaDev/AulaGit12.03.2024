let limite = 9;
let tabuada = 9;


if (limite <= 0) {
    console.log("não podemos multiplicar por numero negativos e igual zero")
}
else if (tabuada % 1 !== 0 ){
    console.log ("não multiplicamos numero com virgula")
}else {

    for (let i = 1; i <= tabuada; i++) {
        console.log(tabuada + " x "  + i + " = " + tabuada * i);
    }
}


