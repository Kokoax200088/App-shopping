import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcartComponent } from './cardcart.component';

describe('CardcartComponent', () => {
  let component: CardcartComponent;
  let fixture: ComponentFixture<CardcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
