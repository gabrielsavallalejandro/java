// Nueva estructura


let entrada = prompt ("Elija un producto de la lista y una vez que haya finalizado escriba LISTO " + "\n" + "TORTAS" +"\n" + "BROWNIES" + "\n" + "CUPCAKES")
let total = 0

const listaProductos = [];

listaProductos.push ("TORTAS",2300);
listaProductos.push ("BROWNIES",1200);
listaProductos.push ("CUPCAKES",800);


function agregarAlCarrito () {
    while(entrada != "LISTO") {
        switch (entrada){
            case listaProductos[0]:console.log(listaProductos[0] + " " + ":" + " " + listaProductos[1]);
                    total = total + listaProductos[1];
            break;
            case listaProductos[2]:console.log(listaProductos[2] +  " " + ":" + " " + listaProductos[3]);
                total = total + listaProductos[3];
            break;
            case listaProductos[4]:console.log(listaProductos[4] +  " " + ":" + " " + listaProductos[5]);
                total = total + listaProductos[5];
            break;
            default: alert("Producto no encontrado")
            break;
        }
        entrada = prompt("Elija un producto de la lista y una vez que haya finalizado escriba LISTO" + "\n" + "TORTAS" +"\n" + "BROWNIES" + "\n" + "CUPCAKES");
    }
    console.log("Total a pagar = " + total);
}

agregarAlCarrito()