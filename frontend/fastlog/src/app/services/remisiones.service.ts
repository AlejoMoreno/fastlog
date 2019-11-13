import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class RemisionesService {

  constructor(private http: HttpClient) { }

  create(id_clinica:number, id_casa_comercial:number, id_estado:number, id_usuario:number, id_gps:number){
    return this.http.post(ConfigurationService.url + 'remisiones/create', {
      id_clinica: id_clinica,
      id_casa_comercial: id_casa_comercial,
      id_estado: id_estado,
      id_usuario: id_usuario,
      id_gps: id_gps
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'remisiones/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'remisiones');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'remisiones/delete', {
      id: index
    });
  }

  update(index:number, id_clinica:number, id_casa_comercial:number, id_estado:number, id_usuario:number, id_gps:number){
    return this.http.post(ConfigurationService.url + 'remisiones/update', {
      id: index,
      id_clinica: id_clinica,
      id_casa_comercial: id_casa_comercial,
      id_estado: id_estado,
      id_usuario: id_usuario,
      id_gps: id_gps
    });
  }

  /**
   * Remisiones productos
   */
  createRemisionesProductos(id_producto:number, id_estado:number, id_remision:number){
    return this.http.post(ConfigurationService.url + 'remisionesProductos/create', {
      id_producto: id_producto,
      id_estado: id_estado,
      id_remision: id_remision
    });
  }

  /**
   * Remisiones firmas
   */
  createRemisionesFirmas(id_remision:number, firma:string, nombre:string, observacion:string){
    return this.http.post(ConfigurationService.url + 'remisionesFirmas/create', {
      id_remision: id_remision,
      firma: firma,
      nombre: nombre,
      observacion: observacion
    });
  }

}
