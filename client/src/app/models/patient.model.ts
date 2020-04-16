import { Disease } from './disease.model';

export class Patient {
    constructor() {
        this.name = '';
        this.birthdate = null;
        this.tAJNumber = 0;
        this.caseHistory = null;
    }

    public name: string;
    public birthdate: Date;
    public tAJNumber: number;
    public caseHistory: Patient[];
}
