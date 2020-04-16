export class Disease {
    constructor() {
        this.diagnosis = '';
        this.prescribedMedicines = [];
        this.treatmentList = [];
    }

    public diagnosis: string;
    public prescribedMedicines: string[];
    public treatmentList: string[];
}
