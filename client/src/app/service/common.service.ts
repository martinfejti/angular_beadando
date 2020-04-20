import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public patientAddedObservable = new Subject();

  constructor() { }

  getArrayElementsFromString = (source: string): string[] => {
    const sourceString = source;
    const finalArray: string[] = sourceString.split(';');

    return finalArray;
  }

  notifyPatientCreation() {
    this.patientAddedObservable.next();
  }
}
