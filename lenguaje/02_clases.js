function PersonaES5 (nombre) {
	this.nombre = nombre
}

PersonaES5.prototype.saludar = function(otro = 'amigo') {
	console.log(`Hola ${otro}, soy ${this.nombre}`)
}

PersonaES5.cerebro = true
PersonaES5.pensar = function () {
	console.log('Las personas piensan')
} 

PersonaES5.pensar()
/* Object.create()
Array.isArray()
String.fromCharCode()
Math.random()
JSON.parse()
JSON.parse() */

// Clases en ES6

class Persona {
	constructor(nombre = '') {
		this.nombre = nombre
	}
	saludar(otro = 'amigo') {
		console.log(`Hola ${otro}, soy ${this.nombre}`)
	}
	static pensar() {
		console.log('Las personas piensan')
	}
}

Persona.pensar()

const p1 = new Persona('Pepe')
const p2 = new Persona('Elena')
p1.saludar(p2.nombre)
console.log(p1)
p2.edad = 32
console.log(p2)


class Alumno extends Persona {
	constructor(nombre = '', curso = '') {
		super(nombre)
		this.curso = curso
	}

	saludar(otro = 'amigo') {
		super.saludar(otro)
		console.log(`Y estudio ${this.curso}`)
	}
}

const a1 = new Alumno('Raquel', 'Angular')
a1.edad = 32
a1.saludar()
console.log(a1)


