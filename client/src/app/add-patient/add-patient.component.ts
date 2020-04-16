import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Patient } from './../models/patient.model';
import { Disease } from './../models/disease.model';
import { AddPatientService } from './add-patient.service';
import { CommonService } from './../service/common.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [AddPatientService]
})
export class AddPatientComponent implements OnInit {

  @ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;
  public disease: Disease;
  public patient: Patient;
  tempPrescribedMedicines: string;
  tempTreatmentList: string;

  constructor(private addPatientService: AddPatientService, private commonService: CommonService) {
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

    if (this.patient.name && this.patient.birthdate && this.patient.tAJNumber) {
      this.addPatientService.addPatient(this.patient).subscribe(result => {
        this.closeBtn.nativeElement.click();
        this.commonService.notifyPatientCreation();
      });
    } else {
      alert('A név, születési dátum és TAJ szám mezők kitöltése kötelező!');
    }
  }

  getArrayElementsFromString = (source: string): string[] => {
    const sourceString = source;
    const finalArray: string[] = sourceString.split(';');

    return finalArray;
  }

}
