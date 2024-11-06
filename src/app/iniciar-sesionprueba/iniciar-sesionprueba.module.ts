import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionpruebaPageRoutingModule } from './iniciar-sesionprueba-routing.module';

import { IniciarSesionpruebaPage } from './iniciar-sesionprueba.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IniciarSesionpruebaPageRoutingModule
  ],
  declarations: [IniciarSesionpruebaPage]
})
export class IniciarSesionpruebaPageModule {}
