import { Component, OnInit } from '@angular/core';
import { PatientListService } from './patient-list.service';
import { CommonService } from './../service/common.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [ PatientListService ]
})
export class PatientListComponent implements OnInit {

  public patients: any[];

  constructor(private patientListService: PatientListService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPatients();

    this.commonService.patientAddedObservable.subscribe(result => {
      this.getAllPatients();
    });
  }

  getAllPatients() {
    this.patientListService.getAllPatients().subscribe(result => {
      const key = 'data';
      this.patients = result[key];
    });
  }

}
