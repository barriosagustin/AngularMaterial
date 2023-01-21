import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Components
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
// import { EditarUsuarioComponent } from './components/dashboard/usuarios/editar-usuario';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
