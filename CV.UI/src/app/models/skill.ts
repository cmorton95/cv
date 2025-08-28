export class Skill {
    constructor(name: string, rating: number, state?: string) {
        this.name = name;
        this.rating = rating;
    }
    name: string;
    rating: number;
    state?: string;
}