import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMealComponent } from './results-meal.component';

describe('ResultsMealComponent', () => {
  let component: ResultsMealComponent;
  let fixture: ComponentFixture<ResultsMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
