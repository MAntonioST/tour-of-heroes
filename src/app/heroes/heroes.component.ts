import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    UpperCasePipe,
    FormsModule,
    HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  showList = false;
  heroImagePath = 'spiderman-background.jpg';
  showDetails = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroesMarvel();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.showDetails = true;
    this.showList = false; // Esconde a lista quando um herói é selecionado
  }

  onReturnToList() {
    this.showDetails = false;
    this.showList = true;
    this.selectedHero = undefined; // Limpa o herói selecionado
  }
}
