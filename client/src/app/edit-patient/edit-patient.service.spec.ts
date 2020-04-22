import { TestBed } from '@angular/core/testing';

import { EditPatientService } from './edit-patient.service';

describe('EditPatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPatientService = TestBed.get(EditPatientService);
    expect(service).toBeTruthy();
  });
});
