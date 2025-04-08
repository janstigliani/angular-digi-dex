import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiCardComponent } from './digi-card.component';

describe('DigiCardComponent', () => {
  let component: DigiCardComponent;
  let fixture: ComponentFixture<DigiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
