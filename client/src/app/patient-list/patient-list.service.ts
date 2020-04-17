import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './../models/patient.model';

@Injectable()
export class PatientListService {

  constructor(private httpClient: HttpClient) { }

  getAllPatients() {
    return this.httpClient.post<Patient[]>('http://localhost:4000/api/patient/getAllPatients', {});
  }
}
