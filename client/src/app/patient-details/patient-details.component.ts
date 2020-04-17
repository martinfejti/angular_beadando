import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Disease } from './../models/disease.model';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() patient;
  @Input() toggleDetails: boolean;

  constructor() {}

  ngOnInit() {
  }

}
