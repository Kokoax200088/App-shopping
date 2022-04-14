import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MepageComponent } from './mepage.component';

describe('MepageComponent', () => {
  let component: MepageComponent;
  let fixture: ComponentFixture<MepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
