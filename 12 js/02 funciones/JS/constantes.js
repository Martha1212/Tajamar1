"use strict"

// ES6 existen lent y const con ambito {}

function mostrar(){
    const x = 2
{
     const X = 23
   
    }
    console.log(x)
}
function calcularCircunferencia(radio){
    return 2 * Math.PI * radio
}
function mostrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`
        la circunferencia de radio ${radio}
        tiene de longitud ${cir}
        `)        
}
const X = 5
mostrar()
mostrarCircunferencia(5)


