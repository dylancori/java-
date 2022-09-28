
//login
const usuariolog = "1234"
const passlog = "123"

function validar(){
    let usuario = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    if (usuario == "1234" && pass == "123") {
        swal('login corrrecto', `Bieenvenido Usuario ${usuario}`, 'success')
        
    } else
     swal('datos invalidos', '', 'error')
     
}


// // hacer un pago
// const nropago = document.querySelector("#nropago");
// const importe = document.querySelector("#importe");
// const cuotas = document.querySelector("#cuotas");
// const tarjeta = document.querySelector("#tarjeta")
// const visa = document.querySelector("#visa")
// const master = document.querySelector("#master")

// let result = importe / cuotas
// if (tarjeta == visa) {
//     let 
    
// }


//agregar contacto

class contactos{
    constructor(id,nombre,alias,banco){
        this.id = id
        this.nombre =  nombre    
        this.alias = alias
        this.banco = banco
    } 
}
const listacontactos = [];

listacontactos.push(new contactos(1,"juan","juanmp","mercadopago"));
listacontactos.push(new contactos(2,"elias","eliasfargan","msantander"));
listacontactos.push(new contactos(3,"martin","martingali","galicia"));
listacontactos.push(new contactos(4,"manu","manubrubank","brubank"));






function agregarElemento() {
    let cont = new contactos(
      document.querySelector("#id").value,
    document.querySelector("#nombre").value,
      document.querySelector("#alias").value,
      document.querySelector("#banco").value,)

    listacontactos.push(cont);
    localStorage.setItem('contactos', JSON.stringify(listacontactos))
    info.innerHTML +=  `<option value="contacto ${ document.querySelector("#id").value}">${document.querySelector("#nombre").value}</option>`
    swal('contacto agregado con exito', '', 'success')
}

function mostrarArreglo() {
    let agreg = document.querySelector('#agreg');
    agreg.innerHTML = '';

    for (const cont of listacontactos) {
        let contParrafo = document.createElement('p');
        contParrafo.innerHTML = `<span>${cont.id}-</span><span>${cont.nombre}-</span><span>${cont.alias}-</span>${cont.banco}<span></span>
        `

        agreg.appendChild(contParrafo);
    }
}

//transaccion
const transacciones = [];

const timport = document.querySelector("#timport")
let info = document.getElementById("contacto")

for (const nombresss  of listacontactos) {
    info.innerHTML +=  `<option value="contacto  ${nombresss.id}">${nombresss.nombre}</option>`
}