// src/app/hero.service.ts

import { Injectable } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroes: Hero[] = [
    { id: 1, name: 'Logan', alias: 'Wolverine', power: 'Fator de cura e garras de adamantium' },
    { id: 2, name: 'Peter Parker', alias: 'Homem-Aranha', power: 'Força e agilidade de aranha, sentido aranha' },
    { id: 3, name: 'Tony Stark', alias: 'Homem de Ferro', power: 'Armadura high-tech e intelecto genial' },
    { id: 4, name: 'Steve Rogers', alias: 'Capitão América', power: 'Força e agilidade sobre-humanas' },
    { id: 5, name: 'Thor Odinson', alias: 'Thor', power: 'Deus do Trovão, controle do Mjolnir' },
    { id: 6, name: 'Bruce Banner', alias: 'Hulk', power: 'Força e resistência ilimitadas' },
    { id: 7, name: 'Natasha Romanoff', alias: 'Viúva Negra', power: 'Espiã e lutadora excepcional' },
    { id: 8, name: 'Clint Barton', alias: 'Gavião Arqueiro', power: 'Pontaria perfeita e habilidades táticas' },
    { id: 9, name: 'Wanda Maximoff', alias: 'Feiticeira Escarlate', power: 'Manipulação da realidade e telecinese' },
    { id: 10, name: 'T\'Challa', alias: 'Pantera Negra', power: 'Força aprimorada e traje de vibranium' },
    { id: 11, name: 'Carol Danvers', alias: 'Capitã Marvel', power: 'Superforça, voo e projeção de energia' },
    { id: 12, name: 'Stephen Strange', alias: 'Doutor Estranho', power: 'Magia e manipulação de dimensões' }
  ];

  getHeroesMarvel(): Observable<Hero[]> {
    const heroes = of(this.heroes);
    return heroes;
  }
}
