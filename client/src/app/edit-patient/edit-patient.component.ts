import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Patient } from './../models/patient.model';
import { Disease } from './../models/disease.model';
import { CommonService } from './../service/common.service';
import { EditPatientService } from './edit-patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
  providers: [EditPatientService]
})
export class EditPatientComponent implements OnInit {

  @ViewChild('closeEditModal', {static: false}) closeButton: ElementRef;
  patient: Patient;
  disease: Disease;
  tempPrescribedMedicines: string;
  tempTreatmentList: string;

  constructor(private commonService: CommonService, private editPatientService: EditPatientService) {
    this.patient = new Patient();
    this.disease = new Disease();
  }

  ngOnInit() {
    this.commonService.patientEditedObeservable.subscribe(result => {
      this.patient = this.commonService.patientToBeEdited;
    });
  }

  editPatient() {
    this.disease.prescribedMedicines = this.commonService.getArrayElementsFromString(this.tempPrescribedMedicines);
    this.disease.treatmentList = this.commonService.getArrayElementsFromString(this.tempTreatmentList);
    console.log('disease to update: ', this.disease);

    if (this.disease.diagnosis) {
      this.editPatientService.editPatient(this.patient.name, this.disease).subscribe(result => {
        console.log('update result: ', result);
        this.closeButton.nativeElement.click();
        this.commonService.notifyPatientEdition();
      });
    } else {
      alert('Diagnózis mező kitöltése kötelező!!!');
    }
  }

}
