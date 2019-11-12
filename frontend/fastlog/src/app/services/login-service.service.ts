import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ConfigurationService } from '../services/configuration.service';

@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string){
    return this.http.post(ConfigurationService.url + 'login', {
      email: username,
      password: password,
    });
  }

  olvido(email:string, telefono:string){
    return this.http.post(ConfigurationService.url + 'olvido', {
      email: email,
      telefono: telefono,
    });
  }

}
