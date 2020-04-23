import { TestBed } from '@angular/core/testing';

import { DeletePatientService } from './delete-patient.service';

describe('DeletePatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletePatientService = TestBed.get(DeletePatientService);
    expect(service).toBeTruthy();
  });
});
