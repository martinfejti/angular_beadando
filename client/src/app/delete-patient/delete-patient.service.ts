import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeletePatientService {

  constructor(private httpClient: HttpClient) { }

  deletePatient(tajNumber: number) {
    console.log('delete TAJ number: ', tajNumber);
    return this.httpClient.post('http://localhost:4000/api/patient/deletePatient', {
      tAJNumber: tajNumber
    });
  }
}
