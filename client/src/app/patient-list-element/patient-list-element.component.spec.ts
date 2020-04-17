import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListElementComponent } from './patient-list-element.component';

describe('PatientListElementComponent', () => {
  let component: PatientListElementComponent;
  let fixture: ComponentFixture<PatientListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
