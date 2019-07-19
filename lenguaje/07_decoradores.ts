
function course(target) {
	Object.defineProperty(
		target.prototype, 
		'course', 
		{value: () => "Angular 2"}
	)
}

@course
class Person {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oPersona = new Person("Pepe", "Pérez");

console.log(oPersona)
console.log(oPersona['course']()); // Angular 2

// Notacion objetos
const o = {nombre:'Pepe'}
o.nombre
let propiedad = 'nombre'
o[propiedad]
o['nombre'] 


function Student(config) { 
	return function (target) {
		Object.defineProperty(
			target.prototype,
			'course',
			{value: () => config.course} 
		)
	}
}

@Student({
	course: "Angular 8"
})
class Alumno2 {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oEstudiante = new Alumno2("Pepe", "Pérez");
console.log(oEstudiante)
console.log(oEstudiante['course']()); // Angular 8
