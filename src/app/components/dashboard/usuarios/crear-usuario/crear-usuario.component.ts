import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tile, Usuario } from 'src/app/interfaces/usuario';
import { GridListDynamicExample } from 'src/app/services/crear-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = ['Masculino', 'Femenino', 'No binario'];

  tiles: Tile[] = [];
  form: FormGroup;

  constructor(
    private _cargaUsuario: GridListDynamicExample,
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pruebaCarga();
  }

  pruebaCarga() {
    this.tiles = this._cargaUsuario.pruebaCarga();
  }

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    };

    this._usuarioService.agregarUsuarios(user);
    this.router.navigate(['/dashboard/usuarios']);
    this.mensajeUsuario();
  }

  mensajeUsuario() {
    this._snackBar.open('Usuario agregado correctamente', 'Agregado', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
