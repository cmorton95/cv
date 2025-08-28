export class Qualification {
  constructor(name: string, topics: string[], grade: string, date: Date) {
    this.name = name;
    this.topics = topics;
    this.grade = grade;
    this.date = date;
  }
  name: string;
  topics: string[];
  grade: string;
  date: Date;
}