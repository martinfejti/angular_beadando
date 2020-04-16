import { Component, OnInit } from '@angular/core';
import { Patient } from './../models/patient.model';
import { Disease } from './../models/disease.model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  public disease: Disease;
  public patient: Patient;
  tempPrescribedMedicines: string;
  tempTreatmentList: string;

  constructor() {
    this.patient = new Patient();
    this.disease = new Disease();
  }

  ngOnInit() {
  }

  addPatient() {
    this.disease.prescribedMedicines = this.getArrayElementsFromString(this.tempPrescribedMedicines);
    this.disease.treatmentList = this.getArrayElementsFromString(this.tempTreatmentList);
    this.patient.caseHistory.push(this.disease);
    console.log('created patient: ', this.patient);
  }

  getArrayElementsFromString = (source: string): string[] => {
    const sourceString = source;
    const finalArray: string[] = sourceString.split(';');

    return finalArray;
  }

}
