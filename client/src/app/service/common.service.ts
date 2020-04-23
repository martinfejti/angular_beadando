import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Patient } from './../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public patientAddedObservable = new Subject();
  public patientEditedObeservable = new Subject();
  public patientDeletedObservalble = new Subject();
  public patientToBeEdited;
  public patientToBeDeleted;

  constructor() {
    this.patientToBeEdited = new Patient();
    this.patientToBeDeleted = new Patient();
  }

  getArrayElementsFromString = (source: string): string[] => {
    const sourceString = source;
    const finalArray: string[] = sourceString.split(';');

    return finalArray;
  }

  notifyPatientCreation() {
    this.patientAddedObservable.next();
  }

  notifyPatientEdition() {
    this.patientEditedObeservable.next();
  }

  notifyPatientDeletion() {
    this.patientDeletedObservalble.next();
  }

  setPatientToEdit(patient: Patient) {
    this.patientToBeEdited = patient;
    this.notifyPatientEdition();
  }

  setPatientToDelete(patient: Patient) {
    this.patientToBeDeleted = patient;
    this.notifyPatientDeletion();
  }

  unsetPatientToDelete() {
    this.patientToBeDeleted = null;
  }
}
