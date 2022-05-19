const productos = [
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

const strJSOn = JSON.stringify(productos)
localStorage.setItem("producto", strJSOn)

const contenedorProducto = document.querySelector(".contenedor-producto");

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})

function mostrarProductos(){
    for (const producto of productos) {

        const divProducto = document.createElement('div');
        divProducto.classList.add('card');

        const imgProducto = document.createElement('img');
        imgProducto.classList.add('img-producto');
        imgProducto.src = producto.img;

        const tituloProducto = document.createElement('h2');
        tituloProducto.classList.add('titulo-producto');
        tituloProducto.textContent = producto.nombre;

        const precioProducto = document.createElement('h4');
        precioProducto.classList.add('precio-producto');
        precioProducto.textContent = producto.precio;

        const btnProducto = document.createElement('button');
        btnProducto.classList.add('button');
        btnProducto.textContent = "Añadir al carrito";
         btnProducto.onclick = () => {
             addToCarrito(producto.nombre)
         };

        divProducto.appendChild(imgProducto)
        divProducto.appendChild(tituloProducto)
        divProducto.appendChild(btnProducto)

        contenedorProducto.appendChild(divProducto)

    }
}


 const clickBtn = document.querySelectorAll('.button')
 let carrito = []
 const tbody = document.querySelector('tbody')
 
 clickBtn.forEach(btn => {
     btn.addEventListener('click', addCarrito)
 })

function addCarrito(e){
    const button =e.target
    const item =button.closest('.card')
    const itemTitle = item.querySelector('titulo-producto').textContent;
    const itemPrecio = item.querySelector('precio-producto').textContent

    const nuevoItem = {
        titulo:itemTitle,
        precio: itemPrecio,
        cantidad: 1
    }

    addToCarrito(nuevoItem)

}

function addToCarrito(nuevoItem){
  
    // for(let i =0; i < carrito.length)
    carrito.push(nuevoItem)
    console.log(carrito)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item =>{
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito');
        const content = `
        
        <th scope="row">1</th>
                <td class="table__producto">
                  <h6 class="title">${item.titulo}</h6>
                </td>
                <td class="table__precio"><p>${item.precio}</p></td>
                <td class="table__cantidad">
                  <input type="number" min="2" value=${item.cantidad}>
                  <button class="delete btn btn-danger">x</button>
                </td>
                
                `
        tr.innerHTML = content;
        tbody.append(tr)
        
        
    })
}

//USUARIO Y CONTRASEÑA

const email = document.getElementById("inputEmail");
const contraseña = document.getElementById('inputContraseña');
const btn_form = document.getElementById('btn-form');

btn_form.addEventListener("click", ingresar)


function ingresar(ev){
    let email= 'cele@gmail.com'
    let contraseña = '12345678'

    if(document.email.value=='cele@gmail.com' && document.contraseña.value===12345678) ? alert('Sesión iniciada') : alert('Existe un error en usuario o contraseña')}

// function mostrarCarrito(verCarrito){

//     contenedorCarrito.innerHTML = "";

//     verCarrito.forEach(items => {
        
//         const divProducto =document.createElement('div');
//         divProducto.classList.add('card');

//         const trProducto =document.createElement('tr');
//         divProducto.classList.add('carrito');

//         const idProducto =document.createElement('th');
//         idProducto.classList.add('titulo-producto');
//         idProducto.textContent = items.id;

//         const tituloProducto =document.createElement('td');
//         tituloProducto.classList.add('titulo-producto');
//         tituloProducto.textContent = items.nombre;

//         const precioProducto = document.createElement('td');
//         precioProducto.classList.add('precio-producto');
//         precioProducto.textContent = items.precio;

//         const cantidadProducto =document.createElement('td');

//         const nroProducto =document.createElement('input');
//         nroProducto.classList.add('input-producto');

//         const btnnroProducto =document.createElement('btn');
//         btnnroProducto.classList.add('btn-comprar');
//         btnnroProducto.onclick = () => {
//             comprar(pago)
//         }

//         divProducto.appendChild(trProducto)
//         divProducto.appendChild(idProducto)
//         divProducto.appendChild(tituloProducto)
//         divProducto.appendChild(precioProducto)
//         divProducto.appendChild(cantidadProducto)
//         cantidadProducto.appendChild(nroProducto)
//         divProducto.appendChild(btnnroProducto)
        

//         contenedorCarrito.appendChild(divProducto)



//     });
// }