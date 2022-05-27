const clickBtn = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []
let datosUsuarios1 = []

clickBtn.forEach(btn => {
  btn.addEventListener('click', addCarrito)
})


function addCarrito(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: false,
    timer: 1500
  })

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i+=1){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      carritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  carritoTotal()
}

function carritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i+=1){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }


  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Producto removido',
    showConfirmButton: false,
    timer: 1500
  })

  tr.remove()
  carritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      carritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

// USUARIO Y CONTRASEÑA



window.addEventListener('DOMContentLoaded', ()=>{
     obtenerDatosJson()
});

let formAcceso = document.querySelector('#form-acceso')
formAcceso.addEventListener('submit', (e)=>{

  e.preventDefault()

  let usuario = document.querySelector('#inputEmail').value;
  let password = document.querySelector('#inputPass').value;
  let existe = datosUsuarios1.find(datos=> datos.email === usuario && datos.pass === password)
  
  console.log(usuario)
  console.log(password)

   if (existe){
     
    document.querySelector("#acceso-usuarios").innerHTML = ""
    document.querySelector("#acceso-usuarios").innerHTML = `Hola ${existe.nombre}`
    document.querySelector("#acceso-usuarios").style.color = "white"

   }
})


const obtenerDatosJson = ()=>{
  fetch("./usuarios.json")

    .then( (respuesta)=>

             respuesta.json())
    .then( (res)=>{
      res.forEach((usuario)=>{
        datosUsuarios1.push(usuario)
      })
    })
    .catch( (error)=>{
      console.log("Ocurrió un error: ", error)
    })
}

