import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  create(name:string, email:string, password:string){
    return this.http.post(ConfigurationService.url + 'usuarios/create', {
      name: name,
      email: email,
      password: password
    });
  }

  consult(index:number){
    return this.http.get(ConfigurationService.url + 'usuarios/' + index);
  }

  consultAll(){
    return this.http.get(ConfigurationService.url + 'usuarios');
  }

  delete(index:number){
    return this.http.post(ConfigurationService.url + 'usuarios/delete', {
      id: index
    });
  }

  update(index:number, name:string, email:string, password:string){
    return this.http.post(ConfigurationService.url + 'usuarios/update', {
      id: index,
      name: name,
      email: email,
      password: password
    });
  }

}
