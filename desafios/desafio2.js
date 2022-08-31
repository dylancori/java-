let usuario = prompt("ingrese usuario (1 al 4)")
const usuariolog = "1234"
const usuariolog2 = "1122"
const passlog = "123"


if (usuario == usuariolog  ||  usuario == usuariolog2) {
    let password = prompt("ingrese la password(1 al 3)")
    if (password == passlog) {
        console.log("bienvenido usuario " + usuario)
        
        console.log("que operacion desea hacer hoy?")
    } else{
        console.log("password incorrecta")
    }

} else{
    console.log("usuario no reconocido")
}