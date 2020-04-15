import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientListService {

  constructor(private httpClient: HttpClient) { }

  getAllPatients() {
    return this.httpClient.post('http://localhost:4000/api/patient/getAllPatients', {});
  }
}
