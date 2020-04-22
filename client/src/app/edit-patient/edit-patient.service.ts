import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disease } from './../models/disease.model';

@Injectable()
export class EditPatientService {

  constructor(private httpClient: HttpClient) { }

  editPatient(name: string, disease: Disease) {
    console.log('name: ', name);
    console.log('disease in service: ', disease);
    return this.httpClient.post('http://localhost:4000/api/patient/editPatient', {
      patientName: name,
      diagnosis: disease.diagnosis,
      prescribedMedicines: disease.prescribedMedicines,
      treatmentList: disease.treatmentList
    });
  }
}
