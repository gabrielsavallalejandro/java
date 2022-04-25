let ingresaProducto = prompt("Escriba el producto que desea comprar. Una vez elegido escriba LISTO para finalizar.");

let total = 0;

function agregarAlCarrito () {

    while (ingresaProducto !="LISTO"){

        switch(ingresaProducto){
            case "Brownie":
                console.log ("Producto: " + ingresaProducto)
                total = total + 1200;
            break;
            case "Cupcake":
                console.log ("Producto: " + ingresaProducto)
                total = total + 800;
            break;
            case "Torta":
                console.log ("Producto: " + ingresaProducto)
                total = total + 2300; 
            break;    
            default:
                console.log ("No se encontro tu producto");
            break;
        }

        ingresaProducto = prompt("Escriba el producto que desea comprar. Una vez elegido escriba LISTO para finalizar");
    }
    console.log("Total a pagar : $" + total);
}

agregarAlCarrito ()