import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('closeDeleteModal', {static: false}) closeModalButton: ElementRef;
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
      this.closeModalButton.nativeElement.click();
      this.commonService.notifyPatientDeletion();
    });
  }

}
