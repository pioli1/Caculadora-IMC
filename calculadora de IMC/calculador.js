function calcularIMC(){

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        resultado.innerHTML += "<br>Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += "<br>Você está com o peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += "<br>Você está com sobrepeso.";
    } else {
        resultado.innerHTML += "<br>Você está obeso.";
    }

}