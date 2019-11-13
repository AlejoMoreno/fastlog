import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class CasacomercialService {

  constructor(private http: HttpClient) { }

  create(nombre:string, cedula:string, direccion:string, administrador:string, asesor:string){
    return this.http.post(ConfigurationService.url + 'casacomerciales/create', {
      nombre: nombre,
      cedula: cedula,
      direccion: direccion,
      administrador: administrador,
      asesor: asesor
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'casacomerciales/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'casacomerciales');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'casacomerciales/delete', {
      id: index
    });
  }

  update(index:number, nombre:string, cedula:string, direccion:string, administrador:string, asesor:string){
    return this.http.post(ConfigurationService.url + 'casacomerciales/update', {
      id: index,
      nombre: nombre,
      cedula: cedula,
      direccion: direccion,
      administrador: administrador,
      asesor: asesor
    });
  }

}
