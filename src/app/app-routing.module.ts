import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesionprueba',
    loadChildren: () => import('./iniciar-sesionprueba/iniciar-sesionprueba.module').then( m => m.IniciarSesionpruebaPageModule)
  },
  {
    path: 'productos-prueba',
    loadChildren: () => import('./productos-prueba/productos-prueba.module').then( m => m.ProductosPruebaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
