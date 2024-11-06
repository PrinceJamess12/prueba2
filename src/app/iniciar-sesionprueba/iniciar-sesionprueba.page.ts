import { Component } from '@angular/core';
import { ViewWillEnter, ViewDidLeave} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ServiceService} from './../servicio/auth/service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-iniciar-sesionprueba',
  templateUrl: './iniciar-sesionprueba.page.html',
  styleUrls: ['./iniciar-sesionprueba.page.scss'],
})
export class IniciarSesionpruebaPage implements ViewWillEnter, ViewDidLeave {
  public formulario!: FormGroup;
  public cargando_bloqueo: boolean = false;
  private subCargando!: Subscription;
  constructor(
    private fb: FormBuilder,
    private auth: ServiceService
  ) {
    this.formulario = fb.group({
      usuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]]
    })
   }

  public validarFormulario(){
    const esValido = this.formulario.valid;
    if(!esValido){
      return
    }
    const datos = this.formulario.getRawValue();
    const usuario = datos['usuario'];
    const contrasenia = datos['contrasenia'];
    this.auth.iniciarSesionPrueba(usuario,contrasenia);
  }

  public ionViewWillEnter(): void {
    this.subCargando = this.auth.cargando.subscribe(nuevoValor => {
      this.cargando_bloqueo = nuevoValor;
    })
  }
  public ionViewDidLeave(): void {
    if(this.subCargando){
      this.subCargando.unsubscribe();
    }
    
  }
}
