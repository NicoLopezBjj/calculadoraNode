const readLine = require('readline-sync')

let respuesta = ""




function calcular () {
    console.log ("Bienvenido a la calculadora NODE")
    console.log ("1. Suma")
    console.log ("2. Resta")
    console.log ("3. Multiplicacion")
    console.log ("4. Dividir")
    console.log ("5. Salir")
    respuesta = readLine.question ("Elegi la operacion que deseas realizar, escribe el numero:")

    if (respuesta != "5"){
        const primerNumero = readLine.question("Escribi tu primer numero: ")
        const segundoNumero = readLine.question("Escribi tu segundo numero: ")
    

    switch(respuesta){
        case "1":
            var result = parseInt(primerNumero) + parseInt(segundoNumero)
            console.log(`El resultado de tu suma es ${result}`)
            break;
        case "2":
             var result = parseInt(primerNumero) - parseInt(segundoNumero)
            console.log(`El resultado de tu resta es ${result}`)
            break;
        case "3":
             var result = parseInt(primerNumero) * parseInt(segundoNumero)
            console.log(`El resultado de tu multiplicacion es ${result}`)
            break;
        case "4":
             var result = parseInt(primerNumero) / parseInt(segundoNumero)
            console.log(`El resultado de tu division es ${result}`)
            break;
            default:
                break;

        } 
        readLine.question("Presiona cualquier tecla para continuar...");
        calcular()
    }
} 
calcular()

