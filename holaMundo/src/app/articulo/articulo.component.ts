import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos : Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit(): void {

    this.articulos.push(
      {
        nombre: 'Televisor de 32 pulgadas',
        descripcion: 'Marca Dell con 4 años de garantia',
        precio: 4500,
        stock: 20,
        precioMayorista: 4000
      },
      {
        nombre: 'Laptop I5',
        descripcion: 'Laptop con 8gb de Ram',
        precio: 7000,
        stock: 20,
        precioMayorista: 6000
      },
      {
        nombre: 'Heladera Philco',
        descripcion: 'Heladera NoFrost',
        precio: 6000,
        stock: 10,
        precioMayorista: 5000
      }
    )
    
  }

  pasarParametro(articuloRecibido: Articulo){

    console.log(articuloRecibido);
    this.ruta.navigate(['articuloDetalle', { articulo: JSON.stringify(articuloRecibido) }])
    

  }
  

}
