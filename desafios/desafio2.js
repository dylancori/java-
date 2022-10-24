 
//login

document.querySelector("#btnVerifica").onclick = function validar(){
  document.querySelector("#btnVerifica").onclick
  let usuario = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  fetch("../e.json").then(res => res.json()).then(data => {
    
    let user =  data.filter(d => usuario==d.usuario)[0] 
    
    if (user && user.pass == pass ) {
     swal.fire('login corrrecto', `Bienvenido ${usuario}`, 'success')
    } else{
     swal.fire('datos invalidos', '', 'error')
    }
   })
    
    
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




let listacontactos = JSON.parse(localStorage.getItem('contactos'))||[]

document.querySelector("#btnAgregarElemento").onclick = function agregarElemento() {
    
      let id =  document.querySelector("#id").value;
      let nombre =  document.querySelector("#nombre").value;
      let alias = document.querySelector("#alias").value;
      let banco =  document.querySelector("#banco").value;
      let cont = new contactos (id,nombre,alias,banco);

    listacontactos.push(cont);
    localStorage.setItem('contactos', JSON.stringify(listacontactos))
    info.innerHTML +=  `<option value="${ document.querySelector("#nombre").value}">${document.querySelector("#nombre").value}</option>`
    swal.fire('contacto agregado con exito', '', 'success')
}

document.querySelector("#btnMostrarArreglo").onclick = function mostrarArreglo() {
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

const tport = document.querySelector("#tport")
let info = document.getElementById("contacto")


for (const nombresss  of listacontactos) {
    info.innerHTML +=  `<option value="${nombresss.nombre}">${nombresss.nombre}</option>`
    

}
document.querySelector("#transaccion").onclick = function transferir() {
  swal.fire({
    title: "confirma los datos",
    text: `
    trasnferir el total de $${tport.value} a ${info.value}
    `,
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'si, continuar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        `transferencia exitosa a ${info.value}`,
        '',
        'success'
      )
    }else{
      swal.fire("transferencia cancelada", '','error')}
  })
  
}
// hacer un pago

const nropago = document.querySelector("#nropago");
let importe = document.querySelector("#importe")
const cuotas = document.querySelector("#cuotas")

document.querySelector("#pagar").onclick = function realizapago() {
    let resul = ( importe.value / cuotas.value)

    Swal.fire({
        title: "confirma los datos",
        text: `
        nro de cuenta (${nropago.value})
        importe (${resul})
        
        `,
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'si, continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            `pago exitoso a ${nropago.value}`,
            '',
            'success'
          )
        }else{
          swal.fire("pago cancelado", '','error')}
      })

    
}





