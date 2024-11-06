import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeaderLogin} from './../../interfacesPrueba/HeaderLogin';
import {UsuarioLogin} from './../../interfacesPrueba/UsuarioLogin';
import {BehaviorSubject} from 'rxjs'; 
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login';
  public usuarioLogeado: UsuarioLogin | null = null;
  public accessToken: string | null = null;

  private $cargando = new BehaviorSubject<boolean>(false);
  public cargando = this.$cargando.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 


  }

  public iniciarSesionPrueba(nombre_usuario: string, contrasenia: string){
    this.$cargando.next(true);
    const cuerpo: HeaderLogin = {
      username: nombre_usuario,
      password: contrasenia
    }
    this.http.post<UsuarioLogin>(this.URL_LOGIN,JSON.stringify(cuerpo),{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .subscribe(resultado =>{
      this.usuarioLogeado = resultado;
      this.accessToken = resultado.accessToken;
      this.$cargando.next(false);
      console.log(resultado);
      this.router.navigate(['/','productos'])
    });
  }

public cerrarSesion(){
  if(this.usuarioLogeado){
    this.usuarioLogeado = null;
    this.accessToken = null;
    }
  }
}
