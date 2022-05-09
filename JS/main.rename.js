solicitarNombre()

function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresa tu nombre")
    alert("Hola " + nombreIngresado + " soy tu ayudante mientras compres en nuestra tienda")
} 

// class Producto {
//     items(id, nombre, precio) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//     }


const productos =[
    {stock: 5, id: 001, nombre: "Camiseta titular 2022", precio: 5800},
    {stock: 7, id: 002, nombre: "Camiseta suplente 2022", precio: 5800},
    {stock: 9, id: 003, nombre: "Conjunto de entrenamiento 2022", precio: 9800},
    {stock: 7, id: 004, nombre: "Short futbol azul 2022", precio: 2250},
    {stock: 8, id: 005, nombre: "Short futbol blanco 2022", precio: 2250},
    {stock: 7, id: 006, nombre: "Remera entrenamiento azul 2022", precio: 4590},
    {stock: 6, id: 007, nombre: "Remera entrenamiento blanca 2022", precio: 4590}
]

comprar();

function comprar() {
    { 
        console.log("1: Camiseta titular 2022")
        console.log("2: Camiseta suplente 2022")
        console.log("3: Conjunto de entrenamiento 2022")
        
    
        let seleccion = prompt("Seleccione su producto favorito")
        switch(seleccion){
            case "1":
                let id001 = console.log("Se agregará el producto al carrito")
                
                agregarProducto()
                break;
    
            case "2":
                let id002 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
            case "3":
                let id003 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
            case "4":
                let id004 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
            case "5":
                let id005 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
            case "6":
                let id006 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
            case "7":
                let id007 = console.log("Se agregó el producto al carrito")
                agregarProducto()
                break;
                
            default:
                    alert("Operación invalida")
                    break;
        }
    }
}

function agregarProducto(p) {

        continuarCompra =confirm("¿Desea contiuar comprando?")
        if (continuarCompra) {let continuar = alert("Ya podes seguir agregando productos a tu carrito")
        comprar()
        }else {
        finalizarCompra =confirm("¿Deseas pagar lo que tenes en tu carrito?") 
        if(finalizarCompra){pagar()} else {
            alert("Proceso de compra cancelado")
            }
}     


pagar()

function pagar(){
    let finalizarCompra =alert("Aguarde, está siendo derivado al carrito de compras") 
    // if(seleccion){}
    seleccionarPago()

}
function seleccionarPago (){
    console.log("1: Efectivo")
    console.log("2: Tarjeta")
    console.log("3: Tranferencia bancaria")
    

    let seleccion = prompt("Seleccione un método de pago")
    switch(seleccion){
        case "1":
            let efectivo = alert("Pagarás tu producto en efectivo cuando lo recibas")
            finCompra()
            break;

        case "2":
            seleccionarTarjeta()
            break;
        
        case "3":
            let tranferencia = alert("Se ha enviado a su mail los datos para el deposito. Una vez confirmado el pago, el producto se enviará a la dirección ingresada")
            finCompra()
            break;

        default:
            alert("Operación invalida")
            break;
    }
}

function seleccionarTarjeta(t){

    console.log("1: Visa")
    console.log("2: Mastercard")
    console.log("3: Américan Express")
    console.log("3: Cabal")
    

    let seleccionT = prompt("Seleccione su tarjeta")
    switch(seleccionT){
        case "1":
            let visa = alert("Pagarás tu producto con Visa")
            finCompra()
            break;
        case "2":
            let master = alert("Pagarás tu producto con Mastercard")
            finCompra()
            break;
        case "3":
            let american = alert("Pagarás tu producto con American Express")
            finCompra()
            break;
        case "4":
            let cabal = alert("Pagarás tu producto con Cabal")
            finCompra()
            break;
        default:
            alert("Operación invalida")
            break;
    }
        }
    }

    function finCompra(){
        alert("Gracias por confiar en nosotros, que disfrutes tu compra")
        
    }
