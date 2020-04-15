import { Component, OnInit } from '@angular/core';
import { PatientListService } from './patient-list.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  providers: [ PatientListService ]
})
export class PatientListComponent implements OnInit {

  public patients: any[];

  constructor(private patientListService: PatientListService) { }

  ngOnInit() {
    console.log('paciensek: ', this.patients);
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientListService.getAllPatients().subscribe(result => {
      this.patients = result['data'];
    });
  }

}
