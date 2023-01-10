import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
prueba: FormGroup 
loading = false;


  constructor(private pb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.prueba = this.pb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required]

    })

   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.prueba.value.usuario;
    const contraseña = this.prueba.value.contraseña;

if(usuario == 'abarrios' && contraseña == 'prueba'){
  //redireccion a dashboard
  this.fakeLoading();

}
else{
  //error
this.error();
this.prueba.reset();
}

  }

error(){
  this._snackBar.open('Usuario o contraseña invalidos', 'Error', {
    duration:5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}

fakeLoading(){
  this.loading = true;
  setTimeout(() =>{ 

    this.router.navigate(['dashboard']);
  },1500);
}

}
