function app () {

    navigator.geolocation.getCurrentPosition( (position)=>{
        console.dir(position)
    } )
}


window.addEventListener('load', app)