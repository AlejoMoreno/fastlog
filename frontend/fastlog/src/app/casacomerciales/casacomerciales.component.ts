import { Component, OnInit } from '@angular/core';
import { CasacomercialService } from 'app/services/casacomercial.service';

@Component({
  selector: 'app-casacomerciales',
  templateUrl: './casacomerciales.component.html',
  styleUrls: ['./casacomerciales.component.css']
})
export class CasacomercialesComponent implements OnInit {

  nombre = '';
  cedula = '';
  direccion = '';
  administrador = '';
  asesor = '';
  id = 0;

  public casacomerciales: casacomercial[] = [];

  constructor(private casacomercialService: CasacomercialService) { }

  ngOnInit() {
    console.log(this.casacomerciales);
    this.casacomercialService.consultAll().subscribe(
      res => {
        console.log(res);
        this.casacomerciales.push(res['body']);
      }
    );
  }

  ngOnGuardar() {
    this.casacomercialService.create(this.nombre, this.cedula, this.direccion, this.administrador, this.asesor).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnActualizar() {
    this.casacomercialService.update(this.id, this.nombre, this.cedula, this.direccion, this.administrador, this.asesor).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnDelete(id: number) {
    this.casacomercialService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnUpdate(id: number) {
    this.casacomercialService.consult(id).subscribe(
      res => {
        console.log(res);
        this.nombre = res['body'].nombre;
        this.cedula = res['body'].cedula;
        this.direccion = res['body'].direccion;
        this.administrador = res['body'].administrador;
        this.asesor = res['body'].asesor;
        this.id = res['body'].id;
      },
      error => {
        console.error(error);
      }
    );
  }

}

// just an interface for type safety.
interface casacomercial {
  id: number,
	nombre: string;
	cedula: string;
	direccion: string;
  administrador: string;
  asesor: string;
}