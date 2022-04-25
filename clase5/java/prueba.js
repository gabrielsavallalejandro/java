// Nueva estructura


let entrada = prompt ("Elija un producto de la lista y una vez que haya finalizado escriba LISTO " + "\n" + "TORTAS" +"\n" + "BROWNIES" + "\n" + "CUPCAKES")
let total = 0

const listaProductos = [];

listaProductos.push ("TORTAS",2300);
listaProductos.push ("BROWNIES",1200);
listaProductos.push ("CUPCAKES",800);


function agregarAlCarrito () {
    while(entrada != "LISTO") {

            for (let index = 0; index < listaProductos.length; index++){
                total = total + listaProductos["",""];
            }
        entrada = prompt("Elija un producto de la lista y una vez que haya finalizado escriba LISTO" + "\n" + "TORTAS" +"\n" + "BROWNIES" + "\n" + "CUPCAKES");
    }
    console.log("Total a pagar = " + total);
}

agregarAlCarrito()