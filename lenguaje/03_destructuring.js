function algo() {
	let codigo = 23
	let user = 'Pepe'
	let error = false
	
	//return [codigo, user, error]
	return {
		codigo: codigo,
		user: user,
		error : error
	}
}

/* let x = algo()
if (! x[2]) {
	console.log( `El codigo es ${x[0]} y el usario ${x[1]}`)
} */

// let [codigo, user, error] = algo()
let {error, codigo, user} = algo()
if (! error) {
	console.log( `El codigo es ${codigo} y el usario ${user}`)
}