import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  id = 0;

  public usuarios: usuario[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    console.log(this.usuarios);
    this.usuariosService.consultAll().subscribe(
      res => {
        console.log(res);
        this.usuarios.push(res['body']);
      }
    );
  }

  ngOnGuardar() {
    this.usuariosService.create(this.name, this.email, this.password).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnActualizar() {
    this.usuariosService.update(this.id, this.name, this.email, this.password).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnDelete(id: number) {
    this.usuariosService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnUpdate(id: number) {
    this.usuariosService.consult(id).subscribe(
      res => {
        console.log(res);
        this.name = res['body'].name;
        this.email = res['body'].email;
        this.password = res['body'].password;
        this.id = res['body'].id;
      },
      error => {
        console.error(error);
      }
    );
  }

}

// just an interface for type safety.
interface usuario {
  id: number,
	name: string;
	email: string;
	password: string;
}