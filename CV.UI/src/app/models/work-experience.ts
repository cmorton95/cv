export class WorkExperience {
    constructor(name:string, startDate: Date, endDate: Date, type: string, description: string) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.description = description;
    }
    name: string;
    startDate: Date;
    endDate: Date;
    type: string;
    description: string;
}