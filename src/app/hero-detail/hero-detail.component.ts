import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../model/heroes.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-hero-detail',
  standalone: true,
    imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
  @Output() returnToList = new EventEmitter<void>();



  goBack(): void {
    this.returnToList.emit();
  }

}
