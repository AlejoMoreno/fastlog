import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'app/services/clinica.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  nombre = '';
  cedula = '';
  direccion = '';
  administrador = '';
  id = 0;

  public clinicas: clinica[] = [];

  constructor(private clinicaService: ClinicaService) { }

  ngOnInit() {
    console.log(this.clinicas);
    this.clinicaService.consultAll().subscribe(
      res => {
        console.log(res);
        this.clinicas.push(res['body']);
      }
    );
  }

  ngOnGuardar() {
    this.clinicaService.create(this.nombre, this.cedula, this.direccion, this.administrador).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnActualizar() {
    this.clinicaService.update(this.id, this.nombre, this.cedula, this.direccion, this.administrador).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnDelete(id: number) {
    this.clinicaService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnUpdate(id: number) {
    this.clinicaService.consult(id).subscribe(
      res => {
        console.log(res);
        this.nombre = res['body'].nombre;
        this.cedula = res['body'].cedula;
        this.direccion = res['body'].direccion;
        this.administrador = res['body'].administrador;
        this.id = res['body'].id;
      },
      error => {
        console.error(error);
      }
    );
  }

}

// just an interface for type safety.
interface clinica {
  id: number,
	nombre: string;
	cedula: string;
	direccion: string;
  administrador: string;
}