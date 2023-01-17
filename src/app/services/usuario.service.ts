import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios : Usuario[] = [
    {usuario: '1', nombre: 'Agustin', apellido: 'Barrios', sexo: 'H'},
    {usuario: '2', nombre: 'pedro', apellido: 'benitez', sexo: 'H'},
    {usuario: '3', nombre: 'benito', apellido: 'sarmiento', sexo: 'H'},
    {usuario: '4', nombre: 'juan', apellido: 'junin', sexo: 'H'},
    {usuario: '5', nombre: 'rodrigo', apellido: 'justo', sexo: 'H'},
    {usuario: '6', nombre: 'matias', apellido: 'garcia', sexo: 'H'},
    {usuario: '7', nombre: 'cristian', apellido: 'perez', sexo: 'H'},
  
  ];

  constructor() { }

getUsuarios(){
  return this.listUsuarios.slice();

}

eliminarUsuarios(index : number){
  this.listUsuarios.splice(index,1);
}

}
