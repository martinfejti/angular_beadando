import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-list-element',
  templateUrl: './patient-list-element.component.html',
  styleUrls: ['./patient-list-element.component.css']
})
export class PatientListElementComponent implements OnInit {

  @Input() patient;
  toggleDetails: boolean;

  constructor() {
    this.toggleDetails = false;
  }

  ngOnInit() {
  }

  showDetails() {
    this.toggleDetails = !this.toggleDetails;
  }
}
