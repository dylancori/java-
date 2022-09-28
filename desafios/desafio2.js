
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




//transaccion
// const timport = document.querySelector("#timport")
// const contacto = document.querySelector("#contacto")
// contacto = listacontactos.find(listacontactos => listacontactos.id === contacto)











// hacer un pago
const nropago = document.querySelector("#nropago");
const importe = document.querySelector("#importe");
const cuotas = document.querySelector("#cuotas");
const tarjeta = document.querySelector("#tarjeta")
const visa = document.querySelector("#visa")
const master = document.querySelector("#master")

function resultado(importe,cuotas){
    let resultado = importe / cuotas
}



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

    datos = [];


function agregarElemento() {
    let id = document.querySelector("#id").value;
    let nombre = document.querySelector("#nombre").value;
    let alias = document.querySelector("#alias").value;
    let banco = document.querySelector("#banco").value;

    listacontactos.push(id,nombre,alias,banco);
}

function mostrarArreglo() {
    let agreg = document.querySelector('#agreg');
    agreg.innerHTML = '';

    for (const id of listacontactos) {
        let idParrafo = document.createElement('p');
        idParrafo.innerText = id;

        agreg.appendChild(idParrafo);
    }
}
localStorage.setItem('contactos', JSON.stringify(listacontactos))