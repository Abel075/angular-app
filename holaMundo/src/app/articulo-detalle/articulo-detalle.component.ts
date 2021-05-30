import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {


  constructor(private rutaActiva:ActivatedRoute) { } /*  Inyectando la ruta por medio del constructor */

  articulo: Articulo | undefined = undefined;

  ngOnInit(): void {

    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo);
    

    // Recibiendo parametros del componente articulo
    ;
    

  }

}
