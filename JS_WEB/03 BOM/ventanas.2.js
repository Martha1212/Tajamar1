function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eGoogle = document.querySelector('#btnGoogle')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnclick)
    eBtnCerrar.addEventListener('click', btnclick)

    function btnclick(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case "btnAbrir":
                ventana = window.open()
                aVentanas.push(ventana)
                togleButtons()
                break
            case "btnCerrar":
                aVentanas.forEach((v) => { v.close() })
                togleButtons()    
                aVentanas = []
                break
        }
    }

    function btnAbrir() {
        ventana = window.open()
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
        aVentanas.push(ventana)
        console.log(aVentanas)


    }
    function btnCerrar() {
        aVentanas.forEach((item) => { v.close() })
        aVentanas = []


    }
 

}

window.addEventListener('load', app) // carga la pagina 










  //app = function(){}  //app = () => {} se pueden escribir la funcion de estas maneras.