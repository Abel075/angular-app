import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Hola soy un titulo'
  dinero: number = 2400;
  ganancias: number = 0.54;

  fechaNacimiento: Date = new Date('05-08-2019');
  textoLargo: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptatem vitae sed, modi molestiae ipsum obcaecati quae cupiditate laudantium aperiam?"

  constructor() { }

  ngOnInit(): void {
  }

}
