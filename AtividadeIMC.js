let altura = 1.80;
let peso = 90;
let imc = peso / (altura * altura);

let categoria = "";

if (imc < 18.5) {
    categoria = "Abaixo do Peso";
} else if (imc >= 18.5 && imc < 25) {
    categoria = "Peso Normal"
} else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso"
} else {
    categoria = "Obesidade"
}

console.log(imc.toFixed(2));

console.log(categoria);


