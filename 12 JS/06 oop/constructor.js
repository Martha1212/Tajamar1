function libro (autor ,titulo, editorial,fecha,generos)  {

    //var.autor= 'pepe';
    this.autor=autor,
    this.titulo= titulo,
    this.editorial=editorial,
    this.fecha= fecha,
    this.generos= generos
    this.mostrarReferencia = function (){
        let ref = this.autor + ``
        

    }
}
/*libro()
console.log(autor)
*/

let libro1 = new Libro(
    `J. R. R. Tolkien`,
    `El señor de los Anillos`,
    `minotauro`,
)
console.log(libro1)

let libro2 = new Libro(
    `william Gibson`, `Neuromante`,
    `Minotauro`, new Date(`1980`), [`Scifi`])

    //Siempre se puede modificar cualquier objeto

    libro2.propietarios = `pepe`
    console.log(libro2)

    console.log(typeof libro1)
    console.log(libro2.constructor.name)

