import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }

  create(nombre:string, codigo:string){
    return this.http.post(ConfigurationService.url + 'productos/create', {
      nombre: nombre,
      codigo: codigo
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'productos/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'productos');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'productos/delete', {
      id: index
    });
  }

  update(index:number, nombre:string, codigo:string){
    return this.http.post(ConfigurationService.url + 'productos/update', {
      id: index,
      nombre: nombre,
      codigo: codigo
    });
  }

}
