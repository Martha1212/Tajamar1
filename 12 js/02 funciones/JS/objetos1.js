
// un objeto literal
const user = {
    nombre: `pepe`,
    apellido: `perez`,
    direccion: {
        calle: ``,
        ciudad: ``,
        c_postal: ``
    },
    humano:true

    edad: 23,
    aficiones :[`deporte`, `cocinar`]
    isCasado: false
}
console.log(typeof user)
user.cargo = "CEO"
console.log(user)

// Otros tipos de objetos

//Array 

let aDatos = [12, 23, 45, 45, 87]
let aDatosChungo = [12, `pepe`, true, null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15] = 30
console.log(aDatos)

aUsuarios = [
    {
        nombre: `pepe`,
        apellido: `perez`,
        direccion: {
            calle: ``,
            ciudad: ``,
            c_postal: ``
        }
]

console.log(tipeof aUsuarios)
console.log(Array.isArray(aUsuarios))

//string
//numer
//boolean

//function, method, constructor

let fecha = new Date()
let fecha = new RegExp()
let fecha = new Error()


//Math.cos(90)
//JSON.parse


