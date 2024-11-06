import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeaderLogin} from './../../interfacesPrueba/HeaderLogin';
import {UsuarioLogin} from './../../interfacesPrueba/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login';
  public usuarioLogeado: UsuarioLogin | null = null;
  public accessToken: string | null = null;
  constructor(
    private http: HttpClient
  ) { 


  }

  public iniciarSesionPrueba(nombre_usuario: string, contrasenia: string){
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
      console.log(resultado);
    });
  }

public cerrarSesion(){
  if(this.usuarioLogeado){
    this.usuarioLogeado = null;
    this.accessToken = null;
    }
  }
}
