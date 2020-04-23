import { Component, OnInit } from '@angular/core';
import { CommonService } from './../service/common.service';
import { Patient } from './../models/patient.model';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  patient: Patient;

  constructor(private commonService: CommonService) {
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
    // subscribe to service funtion
  }

}
