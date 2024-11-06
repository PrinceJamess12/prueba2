import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPruebaPage } from './productos-prueba.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPruebaPageRoutingModule {}
