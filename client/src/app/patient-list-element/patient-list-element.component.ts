import { Component, OnInit, Input } from '@angular/core';
import { Patient } from './../models/patient.model';
import { CommonService } from './../service/common.service';

@Component({
  selector: 'app-patient-list-element',
  templateUrl: './patient-list-element.component.html',
  styleUrls: ['./patient-list-element.component.css']
})
export class PatientListElementComponent implements OnInit {

  @Input() patient;
  toggleDetails: boolean;
  patientToBeDeleted: Patient;

  constructor(private commonService: CommonService) {
    this.toggleDetails = false;
  }

  ngOnInit() {
  }

  showDetails() {
    this.toggleDetails = !this.toggleDetails;
  }

  editPatient(patient: Patient) {
    this.commonService.setPatientToEdit(patient);
  }

  setPatientDelete(patient: Patient) {
    this.commonService.setPatientToDelete(patient);
  }
}
