import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes - Marvel Edition';
  heroes: Hero[] = [
    { id: 1, name: 'Homem de Ferro' },
    { id: 2, name: 'Capitão América' },
    { id: 3, name: 'Thor' },
    { id: 4, name: 'Viúva Negra' },
    { id: 5, name: 'Hulk' },
    { id: 6, name: 'Homem-Aranha' },
    { id: 7, name: 'Doutor Estranho' },
    { id: 8, name: 'Pantera Negra' },
    { id: 9, name: 'Capitã Marvel' },
    { id: 10, name: 'Visão' }
  ];


}
