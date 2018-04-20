
//Mock de una promesa

function asincP() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    let numero = Math.random()
                    if (number < 0.7) {
                        // correcto
                        resolve(number)
                    } else {
                        // incorrecto
                        reject(number)
                    }


                }, 3000)

        })

}

asincP()
.then(

    (response) => {console.log( 'Todo bien gracias al ${response}')},
    
    (response) => {console.log('Error debido a ${response}')},

)