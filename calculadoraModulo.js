const readLine = require('readline-sync');
const sumar = require('./suma');
const restar = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

function calcular() {
    console.log("Bienvenido a la calculadora NODE");
    const opciones = ["Suma", "Resta", "Multiplicacion", "Dividir", "Salir"];
    const index = readLine.keyInSelect(opciones, "Elegi la operacion que deseas realizar:");

    if (index === 4) {
        console.log("¡Hasta luego!");
        return;
    }

    const primerNumero = readLine.question("Escribi tu primer numero: ");
    const segundoNumero = readLine.question("Escribi tu segundo numero: ");
    let result = 0

    switch (index) {
        case 0:
            result = sumar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu suma es ${result}`);
            break;
        case 1:
            result = restar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu resta es ${result}`);
            break;
        case 2:
            result = multiplicar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu multiplicacion es ${result}`);
            break;
        case 3:
            result = dividir(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu division es ${result}`);
            break;
        default:
            break;
    }

    readLine.question("Presiona ENTER para continuar...");
    calcular();
}

calcular();