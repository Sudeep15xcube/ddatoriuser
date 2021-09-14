import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdatoriuserComponent } from './ddatoriuser.component';

describe('DdatoriuserComponent', () => {
  let component: DdatoriuserComponent;
  let fixture: ComponentFixture<DdatoriuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdatoriuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdatoriuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
