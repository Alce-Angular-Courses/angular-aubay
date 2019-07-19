// Clases en TypeScrip

abstract class SerVivo{
	static isVivo = true
}

class Persona extends SerVivo {
	public nombre: string
	constructor(nombre = '') {
		super()
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
// p2.edad = 32 //Error en TS 
console.log(p2)


class Alumno extends Persona {
	public curso: string
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
// a1.edad = 32 //Error en TS
a1.saludar()
console.log(a1)