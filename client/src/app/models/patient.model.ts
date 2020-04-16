import { Disease } from './disease.model';

export class Patient {
    constructor() {
        this.name = '';
        this.birthdate = new Date();
        this.tAJNumber = 0;
        this.caseHistory = [];
    }

    public name: string;
    public birthdate: Date;
    public tAJNumber: number;
    public caseHistory: Disease[];
}
