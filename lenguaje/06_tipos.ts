{
    let sinTipo
    let otroSinTipo: any
    let cadena: string
    let num: number
    let isOk: boolean
    let codigo: string | number

    // cadena = 43 da error de TS

    codigo = 23
    codigo = '23'
    // codigo = true // Error de TS
}

// Inferencia de tipos
{
    let cadena = 'Pepe'
}


// Arrays
{
    let aDatos: [] = []
    let aDatos2: Array<any>  = []
    let aNumbers: number[] = []
    let aNumbers2: Array<number> = []

    // aNumbers.push('Pepe') // Daria errror de TS
}

// Objetos
{
    let oDatos: {nombre: string, edad: number}
    oDatos = {nombre: 'Pepe', edad: 32}  
}

{
    interface IPersona {
        nombre: string,
        edad: number
    }

    class Persona implements IPersona {
        /* nombre: string
        edad: number
        constructor(nombre, edad) {
            this.nombre = nombre
            this.edad = edad
        } */
        constructor(
            public nombre: string, 
            public edad: number) {}
    }
    
    // Tipos estructurales, no semanticos

    // let oDatos: IPersona
    let oDatos: Persona
    let oDatos1: Persona
    oDatos = new Persona('Juan', 36)
    oDatos1 = {nombre: 'Pepe', edad: 32}  

    console.log(oDatos)
    console.log(oDatos1)
}

// Funcionnes

{
    let una: Function
    let algo : () => void
    let otra: (n: number ) => boolean

    // algo = function () {}
    // function algo() {}
    algo = () => { return 2}
    otra = (num) => {return true}
    const otramas = (c: string) : void => {
    }
 }
