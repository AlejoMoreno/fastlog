import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class ClinicaService {

  constructor(private http: HttpClient) { }

  create(nombre:string, cedula:string, direccion:string, administrador:string){
    return this.http.post(ConfigurationService.url + 'clinicas/create', {
      nombre: nombre,
      cedula: cedula,
      direccion: direccion,
      administrador: administrador
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'clinicas/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'clinicas');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'clinicas/delete', {
      id: index
    });
  }

  update(index:number, nombre:string, cedula:string, direccion:string, administrador:string){
    return this.http.post(ConfigurationService.url + 'clinicas/update', {
      id: index,
      nombre: nombre,
      cedula: cedula,
      direccion: direccion,
      administrador: administrador
    });
  }

}
