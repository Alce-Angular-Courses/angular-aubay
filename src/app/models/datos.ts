import { ICurso, ITurno } from './alumno.model';

export const TURNOS: Array<ITurno> = [
    {id: 'M', name: 'Mañana', descripcion : 'Desde las 9:00'},
    {id: 'T', name: 'Tarde', descripcion : 'Desde las 16:00'},
    {id: 'N', name: 'Noche', descripcion : 'Desde las 19:00'}
]

export const CURSOS: Array<ICurso> = [
    {id: '001A', name: 'Angular', descripcion : 'El framewrk Angular...'},
    {id: '002R', name: 'React', descripcion : 'La libreria Reacct ...'},
    {id: '003V', name: 'Vue', descripcion : 'El nuevo framework Vue ...'}
]
