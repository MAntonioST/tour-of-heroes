import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from "./heroes/heroes.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'

}
