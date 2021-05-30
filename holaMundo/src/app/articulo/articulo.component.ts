import { Component, OnInit } from '@angular/core';



interface Articulo{
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos : Array<Articulo> = new Array<Articulo>();

  constructor() { }

  ngOnInit(): void {

    this.articulos.push(
      {
        nombre: 'Televisor de 32 pulgadas',
        descripcion: 'Marca Dell con 4 años de garantia',
        precio: 4500
      },
      {
        nombre: 'Laptop I5',
        descripcion: 'Laptop con 8gb de Ram',
        precio: 7000
      },
      {
        nombre: 'Heladera Philco',
        descripcion: 'Heladera NoFrost',
        precio: 6000
      }
    )
    
  }
  

}
