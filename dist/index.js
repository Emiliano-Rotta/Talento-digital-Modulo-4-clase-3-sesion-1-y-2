"use strict";

// npm init

//Instalar esto
// @babel/core  -> nucleo de babel
// @babel/cli -> interfaz en linea de comandos
// @babel/preset-env -> convierte codigo ES6 a ES5

var saludo = function saludo(nombre) {
  return "Hola, ".concat(nombre, "!!");
};
console.log(saludo("Emiliano"));



var multiplicar = function multiplicar(num) {
  return num * 2;
};
console.log(multiplicar(10));