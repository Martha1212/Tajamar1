import { CURSOS } from './cursos.js'
export class Formulario {

    constructor() {

        this.datos = {
            nombre: '',
            apellido: '', 
            nacimiento: '',
            email: '',
            passwd: '', 
            datos: '',
            isOk1: false,
            isOk2: false,
            isOk3: false,
            isOk4: false,
            isOk5: false,
            isOk6: false,
            isOk7: false,
            isOk8: false,
            curso: {},
            asignaturas: []
        }
        this.isLeido = false
        this.accederDom()   
        this.definirManejadores()
    }
    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="curso"]') 
        this.domCbxIsOk1 = document.querySelector('#isOk1')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domCbxIsOk3 = document.querySelector('#isOk3')
        this.domCbxIsOk4 = document.querySelector('#isOk4')
        this.domCbxIsOk5 = document.querySelector('#isOk5')
        this.domCbxIsOk6 = document.querySelector('#isOk6')
        this.domCbxIsOk6 = document.querySelector('#isOk7')
        this.domCbxIsOk6 = document.querySelector('#isOk8')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')
    }

    definirManejadores() {

        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.domCbxIsOk.addEventListener('change', this.reset.bind(this))
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

    completar() {

        this.domFieldAcedemic.classList.toggle('ocultar')
        if (this.domFieldAcedemic.classList.contains('ocultar')) {
            this.domRadioCurso[0].checked = true
            this.domSelectCurso.selectedIndex=0 

        }

    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.nacimiento = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.passwd =  this.domInpPasswd.value
        this.datos.curso = this.procesarRadio(this.domRadioCurso)  
        this.datos.isOk1 = this.domCbxIsOk1.checked
        this.datos.isOk2 = this.domCbxIsOk2.checked
        this.datos.isOk3 = this.domCbxIsOk3.checked
        this.datos.isOk4 = this.domCbxIsOk4.checked
        this.datos.isOk5 = this.domCbxIsOk5.checked
        this.datos.isOk6 = this.domCbxIsOk6.checked
        this.datos.isOk7 = this.domCbxIsOk7.checked
        this.datos.isOk8 = this.domCbxIsOk8.checked
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
            <li>Fecha nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones 2 ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)
    }
}










