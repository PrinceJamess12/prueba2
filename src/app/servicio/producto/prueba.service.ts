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
  private saltar = 0;
  private cantidad = 10;
  private total = 0;
  private $producto = new BehaviorSubject<ProductoPrueba[]>([]);
  public producto = this.$producto.asObservable();

  constructor(
    private http: HttpClient,
    private auth: ServiceService
  ) { }

  public listarProductos(){
    const url_nueva = `${this.URL_PRODUCTOS}?limit=${this.cantidad}&skip=0`;
    this.http.get<ProductoRespuestaPrueba>(url_nueva, {
      headers: {
        'Authorization': "Bearer "+this.auth.accessToken,
        'Content-Type': 'application/json'
      }
    })
    .subscribe(datos => {
        this.$producto.next(datos.products);
        this.total = datos.total;

    });
  }

  public siguientesProductos(){
    this.saltar = this.saltar + this.cantidad;
    const url_nueva = `${this.URL_PRODUCTOS}?limit=${this.cantidad}&skip=${this.saltar}`;
    this.http.get<ProductoRespuestaPrueba>(url_nueva, {
      headers: {
        'Authorization': "Bearer "+this.auth.accessToken,
        'Content-Type': 'application/json'
      }
    })
    .subscribe(datos => {
        this.$producto.next(datos.products);
        this.total = datos.total;

    });
  }

  public productosAnterior(){
    const resta = this.saltar - this.cantidad;
    if(resta < 0){
      this.saltar = 0;
    }
    else{
      this.saltar = this.saltar - this.cantidad
    }
    this.saltar = this.saltar + this.cantidad;
    const url_nueva = `${this.URL_PRODUCTOS}?limit=${this.cantidad}&skip=${this.saltar}`;
    this.http.get<ProductoRespuestaPrueba>(url_nueva, {
      headers: {
        'Authorization': "Bearer "+this.auth.accessToken,
        'Content-Type': 'application/json'
      }
    })
    .subscribe(datos => {
        this.$producto.next(datos.products);
        this.total = datos.total;

    });
  }
}
