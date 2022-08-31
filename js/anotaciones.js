//variables


/*let curso = "coderhouse"
console.log(curso);
let numeroDeAlumnos = 181;
console.log(numeroDeAlumnos);
let enCurso = true;
console.log(enCurso);*/

//tipos de datos
//numeros
//cadenad de caracteres o STRINGS
//buleanos o booleans TRUE - FALSE
/*let usuario = prompt("ingrese usuario (1 al 4)")
let password = prompt("ingrese la password(1 al 3)")

if (usuario == ("1234")) {
    if (password == ("123")) {
        console.log("bienvenido")
    } else{
        console.log("password incorrecta")
    }

} else{
    console.log("usuario no reconocido")
}
*/
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