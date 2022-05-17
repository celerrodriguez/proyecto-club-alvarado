// solicitarNombre()

// function solicitarNombre(){
//     let nombreIngresado   = prompt("Ingresa tu nombre")
//     console.log("Hola " + nombreIngresado + " soy tu ayudante mientras compres en nuestra tienda")
// } 

// // class Producto {
// //     items(id, nombre, precio) {
// //         this.id = id;
// //         this.nombre = nombre;
// //         this.precio = precio;
// //     }


// const productos =[
//     {stock: 5, id: 001, nombre: "Camiseta titular 2022", precio: 5800},
//     {stock: 7, id: 002, nombre: "Camiseta suplente 2022", precio: 5800},
//     {stock: 9, id: 003, nombre: "Conjunto de entrenamiento 2022", precio: 9800},
//     {stock: 7, id: 004, nombre: "Short futbol azul 2022", precio: 2250},
//     {stock: 8, id: 005, nombre: "Short futbol blanco 2022", precio: 2250},
//     {stock: 7, id: 006, nombre: "Remera entrenamiento azul 2022", precio: 4590},
//     {stock: 6, id: 007, nombre: "Remera entrenamiento blanca 2022", precio: 4590}
// ]


// comprar();

// function comprar() {
//     { 
//         console.log("1: Camiseta titular 2022")
//         console.log("2: Camiseta suplente 2022")
//         console.log("3: Conjunto de entrenamiento 2022")
//         console.log("4:Short futbol azul 2022")
//         console.log("5: Short futbol blanco 2022")
//         console.log("6: Remera entrenamiento azul 2022")
//         console.log("7: Remera entrenamiento blanca 2022")
        
    
//         let seleccion = prompt("Seleccione su producto favorito")
//         let carrito = []

//         switch(seleccion){
//             case "1":
//                 console.log("Se agregará el producto al carrito")
                
//                 if(seleccion==1) {  
//                     carrito.push ([0]) 
//                 }
//                 agregarProducto()
//                 break;
                
    
//             case "2":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==2) { 
//                     carrito.push ([1]) 
//                 }
//                 agregarProducto()
//                 break;
//             case "3":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==3) {  
//                     carrito.push ([2]) 
//                 }
//                 agregarProducto()
//                 break;
//             case "4":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==4) {  
//                     carrito.push ([3]) 
//                 }
//                 agregarProducto()
//                 break;
//             case "5":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==5) {  
//                     carrito.push ([4]) 
//                 }
//                 agregarProducto()
//                 break;
//             case "6":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==6) {  
//                     carrito.push ([5]) 
//                 }
//                 agregarProducto()
//                 break;
//             case "7":
//                 console.log("Se agregará el producto al carrito")
//                 if(seleccion==7) {  
//                     carrito.push ([6]) 
//                 }
//                 agregarProducto()
//                 break;
                
//             default:
//                     alert("Operación invalida")
//                     break;
//         }
//     }
// }



// function agregarProducto(p){
//         continuarCompra =confirm("¿Desea contiuar comprando?")
//         if (continuarCompra) {let continuar = console.log("Ya podes seguir agregando productos a tu carrito")
//         comprar()
//         }else {
//         finalizarCompra =confirm("¿Deseas pagar lo que tenes en tu carrito?")
//         alert("Aguarde, está siendo derivado al carrito de compras")
//         if(finalizarCompra){
//             pagar() } else {
//             alert("Proceso de compra cancelado")
//             }
//         }
// }

// //TODAS MIS DUDAS VIENEN EN COMO LINKEAR LO QUE SE SELECCIONA EN COMPRAR() PARA LOGRAR PAGARLO ACA

//  function pagar() {
//      let total = 0
//      return (carrito) => {
//         total += productos.id + " " + productos.nombre + " " + productos.precio
//      }
//       console.log(carrito)
//  }
    

// function seleccionarPago (){
//     console.log("1: Efectivo")
//     console.log("2: Tarjeta")
//     console.log("3: Tranferencia bancaria")
    

//     let seleccion = prompt("Seleccione un método de pago")
//     switch(seleccion){
//         case "1":
//             let efectivo = alert("Pagarás tu producto en efectivo cuando lo recibas")
//             finCompra()
//             break;

//         case "2":
//             seleccionarTarjeta()
//             break;
        
//         case "3":
//             let tranferencia = alert("Se ha enviado a su mail los datos para el deposito. Una vez confirmado el pago, el producto se enviará a la dirección ingresada")
//             finCompra()
//             break;

//         default:
//             alert("Operación invalida")
//             break;
//     }
// }

// function seleccionarTarjeta(t){

//     console.log("1: Visa")
//     console.log("2: Mastercard")
//     console.log("3: Américan Express")
//     console.log("3: Cabal")
    

//     let seleccionT = prompt("Seleccione su tarjeta")
//     switch(seleccionT){
//         case "1":
//             let visa = alert("Pagarás tu producto con Visa")
//             finCompra()
//             break;
//         case "2":
//             let master = alert("Pagarás tu producto con Mastercard")
//             finCompra()
//             break;
//         case "3":
//             let american = alert("Pagarás tu producto con American Express")
//             finCompra()
//             break;
//         case "4":
//             let cabal = alert("Pagarás tu producto con Cabal")
//             finCompra()
//             break;
//         default:
//             alert("Operación invalida")
//             break;
//     }
// }
    

//     function finCompra(){
//         alert("Gracias por confiar en nosotros, que disfrutes tu compra")
        
//     }


const nov = [
    {
    stock: 5, 
    id: 001, 
    nombre: 'Camiseta titular 2022', 
    precio: 5800,
    img:'../img/camiseta-titular-2022.png'
},
    {
    stock: 9, 
    id:002, 
    nombre: 'Camiseta suplente 2022', 
    precio: 5800,
    img:'../img/camiseta-alternativa-2022.png'
},
    {
    stock: 7, 
    id:003, 
    nombre: 'Camiseta arquero titular 2022', 
    precio: 5800,
    img:'../img/camiseta-arquero-titular-2022.png'
},

]

const strJSOn = JSON.stringify(nov)
localStorage.setItem("producto", strJSOn)

// const contCarrito = JSON.stringify(n)
// localStorage.setItem("producto", contCarrito)

const contenedorNovedades = document.querySelector(".contenedor-novedades");
const contenedorCarrito = document.querySelector(".contenedor-carrito");
const carrito = [];
const total = 0


document.addEventListener('DOMContentLoaded', () => {
    mostrarNovedades();
})

function mostrarNovedades(){
    for (const novedades of nov){

        const divNovedades = document.createElement('div');
        divNovedades.classList.add('card');

        const imgNovedades = document.createElement('img');
        imgNovedades.classList.add('img-novedades');
        imgNovedades.src = novedades.img;

        const tituloNovedades = document.createElement('h2');
        tituloNovedades.classList.add('titulo-novedades');
        tituloNovedades.textContent = novedades.nombre;

        const btnNovedades = document.createElement('button');
        btnNovedades.classList.add('btn-alcarrito');
        btnNovedades.textContent = "Añadir al carrito";
        btnNovedades.onclick = () => {
            agregarAlCarrito(novedades.nombre)
        };

        divNovedades.appendChild(imgNovedades)
        divNovedades.appendChild(tituloNovedades)
        divNovedades.appendChild(btnNovedades)

        contenedorNovedades.appendChild(divNovedades)

    }
}

function agregarAlCarrito(name) {

    const productoAgregado = nov.find( novedades => novedades.nombre === name);
    carrito.push(productoAgregado);
    mostrarCarrito(carrito);
}

function mostrarCarrito(mCarrito){
contenedorCarrito.innerHTML = "";

    mCarrito.forEach(mostrarC => {
        const divNovedades = document.createElement('div');
        divNovedades.classList.add('card');

        const div2Novedades = document.createElement('div');
        divNovedades.classList.add('carrito');

        const tituloNovedades = document.createElement('h4');
        tituloNovedades.classList.add('titulo-novedades');
        tituloNovedades.textContent = mostrarC.nombre;

        const precioNovedades = document.createElement('h4');
        precioNovedades.classList.add('precio-novedades');
        precioNovedades.textContent = mostrarC.precio;

        const totalNovedades = document.createElement('h4');
        totalNovedades.classList.add('total-novedades');
        totalNovedades.textContent = compra ();
        

        divNovedades.appendChild(precioNovedades)
        divNovedades.appendChild(tituloNovedades)
        divNovedades.appendChild(div2Novedades)
        divNovedades.appendChild(totalNovedades)
        

        contenedorCarrito.appendChild(divNovedades)

    });
    
}
 function compra (){
     total => total += mostrarC.precio
 }



//Usuario y contraseña
// const strJSOn = JSON.stringify(nov)
// localStorage.setItem("producto", strJSOn)