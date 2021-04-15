import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtyaddttComponent } from './ftyaddtt.component';

describe('FtyaddttComponent', () => {
  let component: FtyaddttComponent;
  let fixture: ComponentFixture<FtyaddttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtyaddttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtyaddttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
