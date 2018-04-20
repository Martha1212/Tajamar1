import { CURSOS } from './cursos.js'
export class Formulario {
    constructor() {
        this.crearfecha()
        this.datos = {
            nombre: '',
            apellido: '',
            apellido2: '',
            nacimiento: '',
            correo: '',
            password: '', 
            password2: '',
            datos: '',
            Correcto: false,
            Correcto2: false,
            Opciones: '',
            Opciones2: '',
            Opciones3: '',
            curso: {},
            asignaturas: []
        }
        this.isLeido = false
        this.accederDom()   
        this.definirManejadores()
    }

    accederDom() {

        this.domFormulario = document.querySelector('#form1')
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido2 = document.querySelector('#apellido2')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpcorreo = document.querySelector('#correo')
        this.domInppassword = document.querySelector('#password')
        this.domInppassword2 = document.querySelector('#password2')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioOpciones = document.querySelectorAll('[name="Opciones"]') 
        this.domRadioOpciones2 = document.querySelectorAll('[name="Opciones2"]')
        this.domRadioOpciones3 = document.querySelectorAll('[name="Opciones3"]')
        this.domCbxCorrecto = document.querySelector('#Correcto')
        this.domCbxCorrecto2 = document.querySelector('#Correcto2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.domSelectCurso.addEventListener('change', this.presentarAsignaturas.bind(this))
    }

    enviar(ev) {
        console.log(ev)
        this.recogerDatos()
        this.presentarDatos()
        if (!this.isLeido) {
            ev.preventDefault()
        }
    }
 
   crearfecha() {

        const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agoste', 'Septiembre')
        const diasemana = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado')
        let fecha = new Date()
        let fechaString = diasemana[fecha.getDay()]
        fechaString += ' de  ' + meses[fecha.getMonth()]
        fechaString += ' del año ' + [fecha.getFullYear()]
        let template = `Hoy es ${fechaString}`
        document.querySelector('#divComentario').innerHTML = `${template}`
    }
    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido2 = this.domInpApellido2.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.correo = this.domInpcorreo.value
        this.datos.password =  this.domInppassword.value
        this.datos.password2 =  this.domInppassword2.value
        this.datos.datos =  this.domAreaDatos.value
        this.datos.Opciones = this.procesarRadio(this.domRadioOpciones)  
        this.datos.Opciones2 = this.procesarRadio(this.domRadioOpciones2)
        this.datos.Opciones3 = this.procesarRadio(this.domRadioOpciones3)
        this.datos.Correcto = this.domCbxCorrecto.checked
        this.datos.Correcto2 = this.domCbxCorrecto2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
    }
    procesarRadio(nodo) {
        let value
        nodo.forEach( (item ) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value 
    }
    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value, 
            text: nodo.options[index].textContent
        }    
    }

    presentarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('ocultar')
        let topics = CURSOS[ev.target.selectedIndex-1].asignaturas
        let HTMLResult = ''
        topics.forEach( elem => HTMLResult +=`<option>${elem}</option>` )
        this.domDivTopics.classList.remove('ocultar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Apellido2: ${this.datos.apellido2}</li>
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>correo: ${this.datos.correo}</li>
            <li>password: ${this.datos.password}</li>
            <li>password2: ${this.datos.password2}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Condiciones marcadas: ${this.datos.Correcto ? 'Si' : 'No'}</li>
            <li>Condiciones marcadas 2: ${this.datos.Correcto2 ? 'Si' : 'No'}</li>
            <li>Opciones: ${this.datos.Opciones}</li>
            <li>Opciones2: ${this.datos.Opciones2}</li>
            <li>Opciones3: ${this.datos.Opciones3}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)
    }

}