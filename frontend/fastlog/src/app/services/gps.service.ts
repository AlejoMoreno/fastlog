import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class GpsService {

  constructor(private http: HttpClient) { }

  create(codigo_barras:string, identificador:string, proveedor:string, celular_proveedor:string){
    return this.http.post(ConfigurationService.url + 'gps/create', {
      codigo_barras: codigo_barras,
      identificador: identificador,
      proveedor: proveedor,
      celular_proveedor: celular_proveedor
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'gps/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'gps');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'gps/delete', {
      id: index
    });
  }

  update(index:number, codigo_barras:string, identificador:string, proveedor:string, celular_proveedor:string){
    return this.http.post(ConfigurationService.url + 'gps/update', {
      id: index,
      codigo_barras: codigo_barras,
      identificador: identificador,
      proveedor: proveedor,
      celular_proveedor: celular_proveedor
    });
  }

}
