import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-cargarproducto',
  templateUrl: './cargarproducto.component.html',
  styleUrls: ['./cargarproducto.component.css']
})
export class CargarproductoComponent implements OnInit {

  nombre = '';
  codigo = '';
  id = 0;

  public productos: producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    console.log(this.productos);
    this.productoService.consultAll().subscribe(
      res => {
        console.log(res);
        this.productos.push(res['body']);
      }
    );
  }

  ngOnGuardar() {
    this.productoService.create(this.nombre, this.codigo).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnActualizar() {
    this.productoService.update(this.id, this.nombre, this.codigo).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
    );
  }

  ngOnDelete(id: number) {
    this.productoService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnUpdate(id: number) {
    this.productoService.consult(id).subscribe(
      res => {
        console.log(res);
        this.nombre = res['body'].nombre;
        this.codigo = res['body'].codigo;
        this.id = res['body'].id;
      },
      error => {
        console.error(error);
      }
    );
  }

}

// just an interface for type safety.
interface producto {
  id: number,
	nombre: string;
	codigo: string;
}
