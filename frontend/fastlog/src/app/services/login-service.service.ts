import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginServiceService {

  private url = "localhost:8000/api/";
  //private url = "http://api.fastlogapp.com/api/";

  constructor(private http: HttpClient) { }

  login(username:string, password:string){
    return this.http.post(this.url + 'login', {
      email: username,
      password: password,
    });
  }

  olvido(email:string, telefono:string){
    return this.http.post(this.url + 'olvido', {
      email: email,
      telefono: telefono,
    });
  }

}
