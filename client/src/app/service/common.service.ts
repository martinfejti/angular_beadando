import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public patientAddedObservable = new Subject();

  constructor() { }

  notifyPatientCreation() {
    this.patientAddedObservable.next();
  }
}
