const readLine = require('readline-sync');
const sumar = require('./suma');
const restar = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

function calcular() {
    
    console.log("\n")
    console.log("Bienvenido a la calculadora NODE");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicacion");
    console.log("4. Dividir");
    console.log("5. Salir")

    const opcion = readLine.questionInt("Elige la operacion que deseas realizar (1-4), o 5 para salir: ");

    if (opcion === 5) {
        console.log("¡Hasta luego!");
        return;
    }

    if (opcion < 1 || opcion > 5) {
        console.log("\n")
        console.log("Opción inválida.");
        readLine.keyInPause("Presiona cualquier tecla para continuar...");
        calcular();
        return;
    }

    const primerNumero = readLine.question("Escribi tu primer numero: ");
    const segundoNumero = readLine.question("Escribi tu segundo numero: ");
    let result = 0

    switch (opcion) {
        case 1:
            result = sumar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu suma es ${result}`);
            break;
        case 2:
            result = restar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu resta es ${result}`);
            break;
        case 3:
            result = multiplicar(parseInt(primerNumero), parseInt(segundoNumero));
            console.log(`El resultado de tu multiplicacion es ${result}`);
            break;
        case 4:
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

