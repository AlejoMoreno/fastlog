import { Component, OnInit } from '@angular/core';

import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-registrogps',
  templateUrl: './registrogps.component.html',
  styleUrls: ['./registrogps.component.css']
})
export class RegistrogpsComponent implements OnInit {

  codigo_barras = '';
  identificador = '';
  proveedor = '';
  celular_proveedor = '';
  id = 0;

  public gpss: gps[] = [];

  constructor(private gpsService: GpsService) { }

  ngOnInit() {
    console.log(this.gpss);
    this.gpsService.consultAll().subscribe(
      res => {
        console.log(res);
        this.gpss.push(res['body']);
      }
    );
  }

  ngOnGuardar() {
    this.gpsService.create(this.codigo_barras, this.identificador, this.proveedor, this.celular_proveedor).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnActualizar() {
    this.gpsService.update(this.id, this.codigo_barras, this.identificador, this.proveedor, this.celular_proveedor).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnDelete(id: number) {
    this.gpsService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnUpdate(id: number) {
    this.gpsService.consult(id).subscribe(
      res => {
        console.log(res);
        this.codigo_barras = res['body'].codigo_barras;
        this.identificador = res['body'].identificador;
        this.proveedor = res['body'].proveedor;
        this.celular_proveedor = res['body'].celular_proveedor;
        this.id = res['body'].id;
      },
      error => {
        console.error(error);
      }
    );
  }
}

// just an interface for type safety.
interface gps {
  id: number,
	codigo_barras: string;
	identificador: string;
	proveedor: string;
	celular_proveedor: string;
}