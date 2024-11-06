import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../servicio/producto/prueba.service';

@Component({
  selector: 'app-productos-prueba',
  templateUrl: './productos-prueba.page.html',
  styleUrls: ['./productos-prueba.page.scss'],
})
export class ProductosPruebaPage implements OnInit {
  lProductos:any=[]

  constructor(
    private pro: PruebaService
  ) { }
  

  ngOnInit() {
   this.cargandoProducto(0)
  }
  cargandoProducto(suma:number){
    this.pro.avanzar(suma)
    this.pro.producto.subscribe(nuevoValor => {
      console.log (nuevoValor)
      this.lProductos=nuevoValor
    })
    this.pro.listarProductos()
  }
  

}
