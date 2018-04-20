import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '', 
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
            curso: '',
            curso: {},
            asignaturas: []
        }
        this.accederDom()   
        this.definirManejadores()
    }

    accederDom() {
        this.domBtnEnviar = document.querySelector('#btnEnviar')
        this.domBtnRestablecer = document.querySelector('#btnrestablecer')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioCurso = document.querySelectorAll('[name="curso"]') 
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectTopics = document.querySelector('#topics')
        this.domDivTopics = document.querySelector('#div_topics')
        this.domDivResultados = document.querySelector('#resultados')
        
    }

    definirManejadores() {
        this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
        this.domBtnRestablecer.addEventListener('click', this.restablecer.bind(this))
        this.domCbxIsOk.addEventListener('change', this.completar.bind(this))
        this.domSelectCurso.addEventListener('change', this.presentarCurso.bind(this))
    }

    enviar(ev) {
        ev.preventDefault()
        this.recogerDatos()
        this.presentarDatos()
    }

    borrar () {
    }

    completar() {
        this.domFieldcurso.classList.toggle('mostrar')
        if (this.domFieldcurso.classList.contains('mostrar')) {
            this.domRadioCurso[0].checked = true
            this.domSelectCurso.selectedIndex=0 
        }
    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.email = this.domInpEmail.value
        this.datos.passwd =  this.domInpPasswd.value
        this.datos.datos =  this.domAreaDatos.value
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

    presentarCursos(ev) {
        let topics = CURSOS[ev.target.selectedIndex-1].curso
        let HTMLResult = ''
        topics.forEach( elem => HTMLResult +=`<option>${elem}</option>` )
        this.domDivTopics.classList.remove('mostrar')
        this.domSelectTopics.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones 2 ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML

    }

   
}

