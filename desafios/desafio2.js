let usuario = prompt("ingrese usuario (1 al 4)")
const usuariolog = "1234"
const usuariolog2 = "1122"
const passlog = "123"


if (usuario == usuariolog  ||  usuario == usuariolog2) {
    let password = prompt("ingrese la password(1 al 3)")
    if (password == passlog) {
        console.log("bienvenido usuario " + usuario)
        let operacion = Number(prompt(` que operacion desea realizar?"
         1-transsaccion 
         2-hacer un pago`));

        if (operacion == 1) {
            console.log('transaccion')
            
        }else if (operacion ==2) {
            console.log("hacer un pago")

            let importe = Number(prompt('seleccione importe'));
            let cuotas = Number(prompt('seleccione cuotas'));
            function pago(importe, cuotas) {
                let resultado = importe / cuotas;
                return resultado
            }
            let resultado = pago(importe,cuotas);
            console.log('el total a pagar es ' + resultado)

            
            let tarjeta = prompt(`seleccione tarjeta: 
            visa(10%of)
            master(20%)`);
            function mediodepago (tarjeta) {
                let x
                switch(tarjeta){
                    case 'visa':
                        x = resultado * 90/100;
                        break;
                    case 'master':
                        x = resultado * 80/100;
                        break;
                    
                }
             return x 
            }
            
            console.log( 'con el descuento quedaria en ' + mediodepago(tarjeta))
        }
        
    } else{
        console.log("password incorrecta")
    }

} else{
    console.log("usuario no reconocido")
}