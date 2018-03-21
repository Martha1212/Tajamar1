let aDatos = [2, 5, 7, 4, 9]
let aDatos = {
    alto: 2,
    anncho: 5,
    largo: 7,
    peso: 4,
    color: 9
}
console.log("Array")

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(item)
}

console.log
for (let key in oDatos) {
    const item = oDatos[key];
    console.log(item)
}
// ES6
console.log("Objeto for of")
for (const i in aDatos) {
    const item = aDatos[i];
    console.log(item)
}

//esperan una funcion colback
aDatos = [2, 5, 7, 4, 9]
aDatos.forEach(item => console.log(item))

//map crea una proyeccion del original 

Let aCuadrados = aDatos.map(item => item*item)
console.log(aCuadrados)

let aPares = aDatos.filter(item => item%2 ===0 )
console.log(aPares)

Cuadrados = (x) => x*x 

let aImparesCuadrados = aDatos.filter(item => item%2 !==0 )
.map(item => item*item)
console.log(aImparesCuadrados)

aDatos.reduce((prev, item) => prev +- item)
console.log(total)

//aDatos.reduceRight()



/*
{
    let i = 0
    const item = aDatos[i]
    console.log(item)
}
{
    let i = 1
    const item = aDatos[i]
    console.log(item)
}
{
    let i = 2
    const item = aDatos[i]
    console.log(item)
}
{let i = 3
    const item = aDatos[i]
    console.log(item)}
{
    let i = 4
    const item = aDatos[i]
    console.log(item)
    */


