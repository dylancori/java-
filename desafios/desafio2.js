let usuario = prompt("ingrese usuario (1 al 4)")
const usuariolog = "1234"
const passlog = "123"

const login = document.querySelector("#login")
const nusuario = ocument.querySelector("floatingInput")
const npass = document.querySelector("floatingPassword")

if (nusuario == usuariolog && npass == passlog) {
    console.log("bienvenido usuario")
} else 
console.log("datos incorrectos")



if (usuario == usuariolog ) {
    let password = prompt("ingrese la password(1 al 3)")
    if (password == passlog) {
        console.log("bienvenido usuario " + usuario)
        let operacion = Number(prompt(` que operacion desea realizar?"
         1-transsaccion 
         2-hacer un pago
         3-agregar contactos`));

        if (operacion == 1) {
            console.log('transaccion')
            alert(` contactos disponibles
            1 - juan
            2 - elias
            3 - martin
            4 - manu
            
            
            `)
            let contacto = Number(prompt(`seleccionar contacto`))
            
            const contact = listacontactos.find(listacontactos => listacontactos.id === contacto)
            console.log(contact)

            




        }else if (operacion ==2) {
            console.log("hacer un pago")
            let cuenta = Number(prompt('numero de pago'))
            let importe = Number(prompt('seleccione importe'));
            let cuotas = Number(prompt('seleccione cuotas'));
            function pago(importe, cuotas) {
                let resultado = importe / cuotas;
                return resultado
            }
            let resultado = pago(importe,cuotas);
            console.log(`el total a pagar en cuenta N-${cuenta} es $` + resultado )

            
            let tarjeta = prompt(`seleccione tarjeta: 
            1-visa(10%of)
            2-master(20%)`);
            function mediodepago (tarjeta) {
                let x
                switch(tarjeta){
                    case '1':
                        x = resultado * 90/100;
                        break;
                    case '2':
                        x = resultado * 80/100;
                        break;
                    
                }
             return x 
            }
            
            console.log( 'con el descuento quedaria en $' + mediodepago(tarjeta))
        }
        
    } else{
        console.log("password incorrecta")
    }

} else {
    alert('USUARIO NO RECONOCIDO')
}








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


const newcontacto = document.querySelector("#nuevocontacto")
const id = document.querySelector("#id")
const nombre = document.querySelector("#nombre")
const alias = document.querySelector("#alias")
const banco = document.querySelector("#banco")

newcontacto.addEventListener("submit", agregarcontacto)

function agregarcontacto(e){
    e.preventDefault()
    console.log(`${id.value} ${nombre.value} ${alias.value} ${banco.value}`)
}

