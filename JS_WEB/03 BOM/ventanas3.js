function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eGoogle = document.querySelector('#btnGoogle')
    let eImagen = document.querySelector('#btImagen')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImagen.addEventListener('click', btnImagen)
    eBtnCerrar.addEventListener('click', btnCerrar)

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
        aVentanas.push(ventana)
        ventana.document.write('<p> Documento recien creado</p>')


    }
    function btnCerrar() {
        aVentanas.forEach((item) => { v.close() })
        aVentanas = []


    }


}

window.addEventListener('load', app) // carga la pagina 



























  //app = function(){}  //app = () => {} se pueden escribir la funcion de estas maneras.