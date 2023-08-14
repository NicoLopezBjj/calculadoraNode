const readLine = require('readline-sync');

let respuesta = "";

console.log("\n")
console.log("Bienvenido a la calculadora:");

do {
    console.log("\n")
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicacion");
    console.log("4. Dividir");
    console.log("5. Salir");

    respuesta = readLine.question("Elegi la operacion que deseas realizar, escribe el numero:");

    if (respuesta > "5"){
        console.log("Opción inválida.")
        continue
    }

    if(respuesta == "5"){
        console.log("¡Hasta luego!")
    }

    if (respuesta !== "5") {
        const primerNumero = readLine.question("Escribi tu primer numero: ");
        const segundoNumero = readLine.question("Escribi tu segundo numero: ");

        switch (respuesta) {
            case "1":
                var resultSuma = parseInt(primerNumero) + parseInt(segundoNumero);
                console.log(`El resultado de tu suma es ${resultSuma}`);
                break;
            case "2":
                var resultResta = parseInt(primerNumero) - parseInt(segundoNumero);
                console.log(`El resultado de tu resta es ${resultResta}`);
                break;
            case "3":
                var resultMultiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);
                console.log(`El resultado de tu multiplicacion es ${resultMultiplicacion}`);
                break;
            case "4":
                var resultDivision = parseInt(primerNumero) / parseInt(segundoNumero);
                console.log(`El resultado de tu division es ${resultDivision}`);
                break;
            default:
                console.log("Opción inválida.");
        }

        readLine.keyInPause("Presiona cualquier tecla para continuar...");
    }
} while (respuesta !== "5");