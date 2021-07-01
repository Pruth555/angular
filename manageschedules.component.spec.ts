import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageschedulesComponent } from './manageschedules.component';

describe('ManageschedulesComponent', () => {
  let component: ManageschedulesComponent;
  let fixture: ComponentFixture<ManageschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageschedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
