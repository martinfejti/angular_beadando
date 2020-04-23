import { Component, OnInit } from '@angular/core';
import { CommonService } from './../service/common.service';
import { Patient } from './../models/patient.model';
import { DeletePatientService } from './delete-patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css'],
  providers: [DeletePatientService]
})
export class DeletePatientComponent implements OnInit {

  patient: Patient;

  constructor(private commonService: CommonService, private deletePatientService: DeletePatientService) {
    this.patient = new Patient();
  }

  ngOnInit() {
    this.commonService.patientDeletedObservalble.subscribe(result => {
      this.patient = this.commonService.patientToBeDeleted;
    });
  }

  unsetDelete() {
    this.commonService.unsetPatientToDelete();
  }

  deletePatient() {
    this.deletePatientService.deletePatient(this.patient.tAJNumber).subscribe(result => {
      console.log('delete result from frontend: ', result);
    });
  }

}
