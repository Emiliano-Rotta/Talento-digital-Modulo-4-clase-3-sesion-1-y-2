// Crear una clase "Auto"
// // Consigna: Crea una clase llamada Auto con las siguientes propiedades: marca, modelo, año. La clase debe tener un método llamado detallesAuto que retorne un string con la marca, modelo y año del Auto. Luego, crea una instancia de la clase y muestra el resultado del método detallesAuto en la consola.

// // se espera: Marca: renault, Modelo: kangoo, Año: 2022

// class Auto {
//     constructor(marca, modelo, anio){
//         this.marca = marca,
//         this.modelo = modelo,
//         this.anio = anio
//     }
//     detalleAuto(){
//         return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`
//     }
// }

// const miAuto = new Auto("renault", "kangoo", 2022)
// console.log(miAuto.detalleAuto())


//----------------------------------
// Ejercicio 2: Clase "Rectángulo" con método para calcular área
// Consigna: Crea una clase llamada Rectangulo con dos propiedades: alto y ancho. Incluye un método llamado calcularArea que retorne el área del rectángulo (alto por ancho). Luego, crea una instancia de la clase con valores de tu elección y llama al método calcularArea para mostrar el resultado en la consola.

// // Se espera: "El área del rectángulo es: 50"

// class Rectangulo {
//     constructor(alto, ancho) {
//         this.alto = alto;
//         this.ancho = ancho;
//     }
//     calcularArea(){
//         return this.alto * this.ancho  
//         //respuesta de David
//         //var area = this.alto * this.ancho
//         //return `El áreas del rectangulo es: ${area}`
//     }
// }
// const miRectangulo = new Rectangulo(10,5)

// console.log("El área del rectángulo es: " + miRectangulo.calcularArea() )

// //------------------------------------

// // Ejercicio 3: Clase "Persona" con método que salude
// // Consigna: Crea una clase llamada Persona con las propiedades nombre y edad. Incluye un método llamado saludar que retorne un mensaje como "Hola, mi nombre es [nombre] y tengo [edad] años". Crea al menos dos instancias de la clase y haz que cada una salude mostrando el resultado en la consola.

// // // Se espera: Hola, mi nombre es Emiliano y tengo 31 años.
// // // Se espera: Hola, mi nombre es Carlos y tengo 30 años.

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad
//     }
//     saludar(){
//         return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
//     }
// }

// const personaUno = new Persona("Emiliano", 31)
// const personaDos = new Persona("Carlos", 30)

// console.log(personaUno.saludar())
// console.log(personaDos.saludar())

//--------------------- extend -------------------------


// class Vehiculo {
//     constructor(tipoVehiculo){
//         this.tipoVehiculo = tipoVehiculo;
//     }
// }
// class Auto extends Vehiculo{
//     constructor(marca, modelo, anio, tipoVehiculo){
//         super(tipoVehiculo)
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }
//     detallesAuto() {
//         return `Tipo: ${this.tipoVehiculo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año:${this.anio}.`
//     }
// }

// const miAuto = new Auto("renault", "kangoo", 2022, "Auto")
// console.log(miAuto.detallesAuto())

//-----------------------------------------------------------------
//              Módulos y generadores


let frutas = ['manzana', 'naranja', 'pera', 'frutilla', 'kiwi']
// let i = 3
// console.log(frutas[i])


// configuramos el generador 
function* generador(){
    let i = 0
    yield frutas[i];  //pausamos la funcion..
    i++
    yield frutas[i];
    i++
    yield frutas[i];
    i++
    yield frutas[i];
    i++
    yield frutas[i];
    i++
    return "terminado.........."
}

let genUno = generador()
console.log(frutas)

console.log(genUno.next().value)
console.log(genUno.next().value)
console.log(genUno.next().value)
console.log(genUno.next().value)
console.log(genUno.next().value)
console.log(genUno.next().value)


//Ejercicio 1
 // Consigna: Tienes un array de colores: ['rojo', 'azul', 'verde', 'amarillo', 'morado']. Crea una función generadora llamada generadorColoresInverso que devuelva los colores en orden inverso (de morado a rojo) utilizando yield. Después de haber devuelto todos los colores, la función debe terminar con el mensaje "Se acabaron los colores". Usa i-- para recorrer el array de atrás hacia adelante.

// let colores = ['rojo', 'azul', 'verde', 'amarillo', 'morado'];

//orden comun
// function* generadorColores(){
//     let i = 0
//     yield colores[i]
//     i++
//     yield colores[i]
//     i++
//     yield colores[i]
//     i++
//     yield colores[i]
//     i++
//     yield colores[i]
//     i++
//     return "Se acabaron los colores"
// }

// const iteradorColores = generadorColores()
// console.log(iteradorColores.next().value)
// console.log(iteradorColores.next().value)
// console.log(iteradorColores.next().value)
// console.log(iteradorColores.next().value)
// console.log(iteradorColores.next().value)
// console.log(iteradorColores.next().value)


//orden inverso
let colores = ['rojo', 'azul', 'verde', 'amarillo', 'morado'];
function* generadorColoresInverso(){
    let i = colores.length -1
    yield colores[i]
    i--
    yield colores[i]
    i--
    yield colores[i]
    i--
    yield colores[i]
    i--
    yield colores[i]
    i--
    return "Se acabaron los colores"
}

const iteradorColoresInverso = generadorColoresInverso()
console.log(iteradorColoresInverso.next().value)
console.log(iteradorColoresInverso.next().value)
console.log(iteradorColoresInverso.next().value)
console.log(iteradorColoresInverso.next().value)
console.log(iteradorColoresInverso.next().value)
console.log(iteradorColoresInverso.next().value)

