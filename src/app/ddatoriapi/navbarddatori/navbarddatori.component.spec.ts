import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarddatoriComponent } from './navbarddatori.component';

describe('NavbarddatoriComponent', () => {
  let component: NavbarddatoriComponent;
  let fixture: ComponentFixture<NavbarddatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarddatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarddatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
