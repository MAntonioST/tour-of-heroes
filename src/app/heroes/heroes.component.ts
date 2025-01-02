import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../service/hero.service';




@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent{

  heroes: Hero[] = [];
  selectedHero?: Hero;
  showList = false;
  heroImagePath = 'spiderman-background.jpg';

  constructor(private heroService:HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroesMarvel();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goBack(): void {
    this.selectedHero = undefined;
  }


}
