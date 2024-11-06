import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPruebaPageRoutingModule } from './productos-prueba-routing.module';

import { ProductosPruebaPage } from './productos-prueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPruebaPageRoutingModule
  ],
  declarations: [ProductosPruebaPage]
})
export class ProductosPruebaPageModule {}
