// npm init

//Instalar esto
// @babel/core  -> nucleo de babel
// @babel/cli -> interfaz en linea de comandos
// @babel/preset-env -> convierte codigo ES6 a ES5


const saludo = (nombre) => {
  return `Hola, ${nombre}!!`
}

console.log(saludo("Emiliano"))

const multiplicar = num => num*2

console.log(multiplicar(10))