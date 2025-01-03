import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    UpperCasePipe,
    FormsModule,
    AsyncPipe,
    HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  private heroService = inject(HeroService);

  heroes$: Observable<Hero[]> = this.heroService.getHeroesMarvel();
  selectedHero?: Hero;
  showDetails = false;
  showList = true;
  heroImagePath = 'spiderman-background.jpg';


  onSelect(hero: Hero): void {
    this.selectedHero = hero;  // Corrigido: atribui o herói selecionado
    this.showDetails = true;
    this.showList = false; // Esconde a lista quando um herói é selecionado
  }

  onReturnToList(): void {
    this.selectedHero = undefined;
    this.showDetails = false;
    this.showList = true;
  }

}
