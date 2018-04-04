function app() {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    eBtnAbrir.disabled = "true"
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana
    let.aVentanas = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)



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

        function togleButtons() {
            eBtnAbrir.disabled = !eBtnAbrir.disabled
            eBtnCerrar.disabled = !eBtnCerrar.disabled

        }
    }


}

window.addEventListener('load', app) // carga la pagina 





















  //app = function(){}  //app = () => {} se pueden escribir la funcion de estas maneras.