/* eslint-disable no-unused-vars */
'use strict'

// ES6(ES2015) incorpora let / const

let x = 1
console.log(x)

const k = 3
// k = 4 da error
const aDatos = [1, 2, 3]

aDatos.push(4)
// aDatos = [] daria un error
console.log(aDatos)

const algo = function() {
	let x = 2
	console.log(x)

	if (x === 2) {
		let x = 3
		console.log(x)
	}
}

algo()

let cadena = 'Hola Pepe'
// eslint-disable-next-line quotes
let cadenaMal = "Hola Pepe" // Mala práctica

// ES6 incorpora los template strings: ``
let template = `
Tengo una variable que dice
		${cadena.toUpperCase()} ` 

console.log(template)

// Funciones

function sumaD(a,b) {}

const suma = function (a,b) {return a+b}

// Arrow funtions o lambdas
// const sumaArrow = (a,b) => {return a+b}
const sumaArrow = (a,b) => a+b
const cuadrado = a => a*a
 