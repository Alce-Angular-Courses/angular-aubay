function asincOriginal(callback) {
	setTimeout ( () => {
		let data = 'Los datos'
		callback(data)
	}, 2000)	
}


function asincPromise () {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			let i = Math.random()
			if(i < 0.7) {
				// Todo OK
				resolve(i)
			} else {
				// error
				reject(new Error(i))
			}
		}, 2000)
	})
}


asincOriginal( (res) => {
	// Proceso lo datos
	console.log(res)
})

// ES6 incorpora promesas nativas JS

asincPromise().then(
	(res) => {console.log('Datos: ' + res)}
).catch(
	(error) => {console.log('Error: ' + error.message)}
);


// ES8 (ES2017) async / await
(async () => {
	try {
		let res = await asincPromise()
		console.log('Datos 2017: ' + res)
	} catch (error) {
		console.log('Error 2017: ' + error.message)
	}
})()