import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidatatableComponent } from './apidatatable.component';

describe('ApidatatableComponent', () => {
  let component: ApidatatableComponent;
  let fixture: ComponentFixture<ApidatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApidatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
