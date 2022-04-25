/*function saludar (){
    console.log("Hola Coders")
}

function fecha (){
    console.log("14/04/2022")
}

function solicitarNombre(saludo,nombre){
    let nombreIngresado = prompt(saludo + " " + nombre + " " + "Ingresar Nombre"); alert("El nombre ingresado es" + " " + nombreIngresado); console.log(nombreIngresado)
}



for (let i = 0; i < 3; i++) {
    solicitarNombre("Hola Coders","mi nombre es Gabriel Savall")
}*/


/*let resultado = 0;

function sumar (primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

function mostrar (mensaje){
    console.log(mensaje)
}

sumar(5,5);
mostrar(resultado);*/

function calculadora (primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        default:
            return 0; 
    }
}

console.log("tu resultado es =" + " " + calculadora(10,5,"+"));