let i = 415
let j = 409

let inicio;
let fim;

if (j < i) {
    inicio = j;
    fim = i
} else {
    inicio = i
    fim = j
}

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}


