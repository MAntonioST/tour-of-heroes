import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent{


  hero: Hero =
    { id: 1,
      name: 'Wolverine'
    };



}
