import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    { usuario: '1', nombre: 'Agustin', apellido: 'Barrios', sexo: 'Masculino' },
    { usuario: '2', nombre: 'pedro', apellido: 'benitez', sexo: 'femenino' },
    { usuario: '3', nombre: 'pablo', apellido: 'martinez', sexo: 'Masculino' },
    { usuario: '4', nombre: 'jorge', apellido: 'junin', sexo: 'Masculino' },
    { usuario: '5', nombre: 'rodrigo', apellido: 'justo', sexo: 'Masculino' },
    { usuario: '6', nombre: 'matias', apellido: 'garcia', sexo: 'no binario' },
    { usuario: '7', nombre: 'cristian', apellido: 'perez', sexo: 'femenino' },
  ];

  constructor() {}

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuarios(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  verUsuario(index: number) {
    return this.listUsuarios[index];
  }

  editarUsuario(user: Usuario, index: number) {
    this.listUsuarios[index].usuario = user.usuario;
    this.listUsuarios[index].nombre = user.nombre;
    this.listUsuarios[index].apellido = user.apellido;
    this.listUsuarios[index].sexo = user.sexo;
  }

  agregarUsuarios(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
