import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  sexo: any[] = ['Masculino', 'Femenino', 'no binario'];

  idEmpleado: any;

  formu: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.formu = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
    const idParam = 'id';
    this.idEmpleado = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    this.obtenerUsuario();
    console.log(this.idEmpleado);
  }

  obtenerUsuario() {
    const user: Usuario = this._usuarioService.verUsuario(this.idEmpleado);
    console.log(user.sexo);
    this.formu.patchValue({
      usuario: user.usuario,
      nombre: user.nombre,
      apellido: user.apellido,
      sexo: user.sexo,
    });
  }

  completeEdit() {
    const usuario: Usuario = {
      usuario: this.formu.get('usuario')?.value,
      nombre: this.formu.get('nombre')?.value,
      apellido: this.formu.get('apellido')?.value,
      sexo: this.formu.get('sexo')?.value,
    };
    console.log(this.sexo);

    this._usuarioService.editarUsuario(usuario, this.idEmpleado);
    this.route.navigate(['/dashboard/usuarios']);
    this.mensajeUsuario();
  }

  mensajeUsuario() {
    this._snackBar.open('Usuario editado correctamente', 'Editado', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
