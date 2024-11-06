import { Component, OnInit } from '@angular/core';
import { ViewWillEnter, ViewDidLeave} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ServiceService} from './../servicio/auth/service.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesionprueba',
  templateUrl: './iniciar-sesionprueba.page.html',
  styleUrls: ['./iniciar-sesionprueba.page.scss'],
})
//export class IniciarSesionpruebaPage implements ViewWillEnter, ViewDidLeave {
export class IniciarSesionpruebaPage implements OnInit  {
  public formulario!: FormGroup;
  public cargando_bloqueo: boolean = false;
  public swReturn=true;
 // private subCargando!: Subscription;
  constructor(
    private fb: FormBuilder,
    private auth: ServiceService,
    private router: Router
  ) {
    this.formulario = fb.group({
      usuario: ['michaelw', [Validators.required]],
      contrasenia: ['michaelwpass', [Validators.required]]
    })
   }
  ngOnInit(): void {

  }
public validarFormulario(){

if(this.swReturn) 
  this.validarFormularioReturn()
  else this.validarFormularioSubject()

}
  public validarFormularioReturn(){
    const esValido = this.formulario.valid;
    if(!esValido){
      return
    }
      this.auth.cargando
    const datos = this.formulario.getRawValue();
    const usuario = datos['usuario'];
    const contrasenia = datos['contrasenia'];
    this.auth.iniciarSesionPruebaReturn(usuario,contrasenia)
    .subscribe(nuevoValor => {
      console.log (nuevoValor)
      this.cargando_bloqueo = nuevoValor;
      //await setTimeout(()=>{ }, 4000)


      this.router.navigate(['/', 'productos-prueba']);
    });
  }
  public validarFormularioSubject(){
    const esValido = this.formulario.valid;
    if(!esValido){
      return
    }
      this.auth.cargando.subscribe(nuevoValor => {
      console.log (nuevoValor)
      this.cargando_bloqueo = nuevoValor;
      //await setTimeout(()=>{ }, 4000)


      this.router.navigate(['/', 'productos-prueba']);
    })
    const datos = this.formulario.getRawValue();
    const usuario = datos['usuario'];
    const contrasenia = datos['contrasenia'];
    this.auth.iniciarSesionPruebaSubject(usuario,contrasenia);
  }
  // public ionViewWillEnter(): void {
  //   this.subCargando = this.auth.cargando.subscribe(nuevoValor => {
  //     console.log (nuevoValor)
  //     this.cargando_bloqueo = nuevoValor;

  //     this.router.navigate(['/', 'productos-prueba']);
  //   })
  // }
  // public ionViewDidLeave(): void {
  //   if(this.subCargando){
  //     this.subCargando.unsubscribe();
  //   }
    
  // }
}
