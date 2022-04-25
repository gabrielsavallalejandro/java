//*CONDICIONALES//*

let unnumero = 5;

let nombre = "gabriel";

//* Operadores: == (Lo que hace es preguntar si los valores a ambos lados del operador son iguales)//*

//* if //*

if(unnumero ==5){console.log("Vas a ver este mensaje xq es verdadero")}; /*Es verdadero*/

if(unnumero ==6){console.log("Vas a ver este mensaje xq es verdadero")}; /*Es falso*/

if(nombre == "Gabriel"){console.log("Si,es Gabriel")};

//* if..else //*

if(nombre == "gabriel"){console.log("Si, ese es el nombre")}
else{console.log("No, no se llama Gabriel")} //* Verndadero //*

if(nombre == "Pedro"){console.log("Si, ese es el nombre")}
else{console.log("No, no se llama Gabriel")} //* Falso //*

//* Caso practico de if..else//*

let nombredeusuario = prompt("Ingresa tu nombre de usuario");

if (nombredeusuario == ""){alert("No ingresaste tu usuario")}
else{alert("Nombre de usuario ingresado" + " " + nombredeusuario)}

//* Caso practico Variables Booleanas//*

let numero = 10; 
let esValida = (numero > 5);

if (esValida) {
    console.log("El valor es > 5");
}
else {
    console.log("El numero es < 5")
}

//* Probando operadores//*

//* == //*

let pruebaNumero = 20; 

if (pruebaNumero === 20) {
    console.log("Es 20");
}
else {
    console.log("Es falso")
}


//* ===//*

let pruebaNumero1 = "20"; 

if (pruebaNumero1 === 20) {
    console.log("Es 20");
}
else {
    console.log("Es falso")
}

//* &&//*

let pruebaNumero2 = 20; 

if (pruebaNumero1 && pruebaNumero2 == 20) {
    console.log("Es 20");
}
else {
    console.log("Es falso")
}

//* ||//*

let pruebaNumero3 = 20; 

if ((pruebaNumero2) || (pruebaNumero3) == 20) {
    console.log("Es 20");
}
else {
    console.log("Es falso")
}

//* ! //*

let pruebaNumero4 = 20; 

if ((pruebaNumero4) = !20) {
    console.log("Es 20");
}


