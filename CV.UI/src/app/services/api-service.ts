import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkExperience } from '../models/work-experience';
import { Skill } from '../models/skill';
import { Qualification } from '../models/qualification';
import { Hobby } from '../models/hobby';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBase: URL = new URL("https://localhost:7248");

  constructor(private client: HttpClient) {}

  getIntroduction(): Observable<string> {
    const url = new URL('intro', this.apiBase);
    return this.client.get<string>(url.toString());
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    const url = new URL('work', this.apiBase);
    return this.client.get<WorkExperience[]>(url.toString());
  }

  getSkills(page: number): Observable<Skill[]> {
    const pageSize = 6;
    const url = new URL('skill', this.apiBase);

    const params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);

    return this.client.get<Skill[]>(url.toString(), { params });
  }

  getQualifications(): Observable<Qualification[]> {
    const url = new URL('qual', this.apiBase);
    return this.client.get<Qualification[]>(url.toString());
  }

  getHobbies(): Observable<Hobby[]> {
    const url = new URL('hobby', this.apiBase);
    return this.client.get<Hobby[]>(url.toString());
  }
}
