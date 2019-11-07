import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public username = "";
  public password = "";
  public email = "";
  public telefono = "";

  constructor( private loginService: LoginServiceService ) { }

  ngOnInit() {
    document.getElementById('login').style.display = 'inline';
    document.getElementById('olvido').style.display = 'none';
  }

  ngOnOlvido() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('olvido').style.display = 'inline';
  }

  ngOnInicioSesion() {
    document.getElementById('respuesta').innerHTML = '';
    if(this.ngValidate('login') == false){
      
      document.getElementById('respuesta').innerHTML = '<div class="card shadow mb-4">'+
          '<div class="card-body">'+
            '<div class="px-3 py-5 bg-gradient-danger text-white">Error en los datos ingresados</div>'+
          '</div>'+
        '</div>';
    
    }
    else{
      
      this.loginService.login(this.username,this.password).subscribe(
        res => {
          console.log(res);
          window.location.href = "/dashboard";
         },
         error => {
           console.error(error);
           document.getElementById('respuesta').innerHTML = '<div class="card shadow mb-4">'+
              '<div class="card-body">'+
                '<div class="px-3 py-5 bg-gradient-danger text-white">' + error + '</div>'+
              '</div>'+
            '</div>';
           window.location.href = "/dashboard";

         }
      );
    
    }
  }

  ngValidate(tipo:string) {
    if(tipo == 'login'){
      if(this.username == '' || this.password == ''){
        return false;
      }
      else{
        return true;
      }
    }
    if(tipo == 'olvido'){
      if(this.email == '' || this.telefono == ''){
        return false;
      }
      else{
        return true;
      }
    }
  }

}
