import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkExperience } from '../models/work-experience';
import { Skill } from '../models/skill';
import { Qualification } from '../models/qualification';
import { Hobby } from '../models/hobby';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUri: string = "https://localhost:7248";

  constructor(private client: HttpClient) {}

  getIntroduction(): Observable<string> {
    const introduction: string = "Hi, I'm Connor. I just joined the 30's club and have been a technology enthusiast and software developer for most of those years. " + 
    "I began hobbyist software development as a teenager, with roots in Java, SQL and C(++). Since then, I've graduated university with a 2-1 " +
    "and moved on to gain 10 years of professional software development experience, primarily in the .NET stack and cloud technologies. I " +
    "perform best as a core member of a team, and love to help and mentor others whilst also learning alongside them. "; //TODO replace with API call
    return of(introduction);
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.client.get<WorkExperience[]>(`${this.apiUri}/work`);
  }

  getSkills(page: number): Observable<Skill[]> {
    const pageSize = 6;
    return this.client.get<Skill[]>(`${this.apiUri}/skill?page=${page}&pageSize=${pageSize}`);
  }

  getQualifications(): Observable<Qualification[]> {
    return this.client.get<Qualification[]>(`${this.apiUri}/qual`)
  }

  getHobbies(): Observable<Hobby[]> {
    return this.client.get<Hobby[]>(`${this.apiUri}/hobby`);
  }
}
