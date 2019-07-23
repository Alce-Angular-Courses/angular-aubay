export interface ITarea {
    nombre: string;
    responsable: string;
    isCompleted: boolean;
}

export class TareaModel implements ITarea{

    //nombre: string
    constructor(
        public nombre: string = '',
        public responsable: string = '',
        public isCompleted: boolean = false) 
    {
        //this.nombre = nombre
    }
}
