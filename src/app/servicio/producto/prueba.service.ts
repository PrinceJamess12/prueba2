import { Injectable } from '@angular/core';
import {ProductoPrueba} from './../../interfacesPrueba/ProductoPrueba';
import { ProductoRespuestaPrueba } from './../../interfacesPrueba/ProductoRespuestaPrueba';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from './../auth/service.service';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  private readonly URL_PRODUCTOS = 'https://dummyjson.com/auth/products';
  //private readonly URL_PRODUCTOS = 'https://dummyjson.com/products';
  private saltar = 0;
  private cantidad = 10;
  private total = 0;
  private $producto = new BehaviorSubject<ProductoPrueba[]>([]);
  public producto = this.$producto.asObservable();

  constructor(
    private http: HttpClient,
    private auth: ServiceService
  ) { }

  public avanzar(suma:number){
    this.saltar=this.saltar+suma
    if (this.saltar<0) this.saltar=0
  }
  public listarProductos(){
    const url_nueva = `${this.URL_PRODUCTOS}?limit=${this.cantidad}&skip=${this.saltar}`;
    this.http.get<ProductoRespuestaPrueba>(url_nueva, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.auth.accessToken,
  
      }
    })
    .subscribe(datos => {
        this.$producto.next(datos.products);
        this.total = datos.total;

    });
  }



 
}
