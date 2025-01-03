import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeteailComponent } from './hero-detail.component';

describe('HeroDeteailComponent', () => {
  let component: HeroDeteailComponent;
  let fixture: ComponentFixture<HeroDeteailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDeteailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDeteailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
