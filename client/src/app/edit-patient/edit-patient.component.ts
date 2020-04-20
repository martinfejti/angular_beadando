import { Component, OnInit } from '@angular/core';
import { Patient } from './../models/patient.model';
import { Disease } from './../models/disease.model';
import { CommonService } from './../service/common.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient;
  diesase: Disease;

  constructor(private commonService: CommonService) {
    this.patient = new Patient();
  }

  ngOnInit() {
    this.commonService.patientEditedObeservable.subscribe(result => {
      this.patient = this.commonService.patientToBeEdited;
    });
  }

}
