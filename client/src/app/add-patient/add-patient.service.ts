import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './../models/patient.model';

@Injectable()
export class AddPatientService {

  constructor(private httpClient: HttpClient) { }

  addPatient(patient: Patient) {
    return this.httpClient.post('/api/patient/createPatient', {
      name: patient.name,
      birthdate: patient.birthdate,
      tAJNumber: patient.tAJNumber,
      caseHistory: patient.caseHistory
    });
  }
}
