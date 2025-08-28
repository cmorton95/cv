import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { WorkExperience } from '../models/work-experience';
import { Skill } from '../models/skill';
import { Qualification } from '../models/qualification';
import { DatePipe } from '@angular/common';
import { StarRating } from './star-rating/star-rating';

@Component({
  selector: 'home',
  imports: [DatePipe, StarRating],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  introduction: WritableSignal<string> = signal('');
  workExperience: WritableSignal<WorkExperience[]> = signal([]);
  skills: WritableSignal<Skill[]> = signal([]);
  qualifications: WritableSignal<Qualification[]> = signal([]);

  skillsPage: WritableSignal<number> = signal(0);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getIntroduction().subscribe(introduction => {
      this.introduction.set(introduction);
    });
    
    this.apiService.getWorkExperience().subscribe(workExperience => {
      this.workExperience.set(workExperience);
    });

    this.apiService.getSkills(this.skillsPage()).subscribe(skills => {
      this.skills.set(skills);
    });

    this.apiService.getQualifications().subscribe(qualifications => {
      this.qualifications.set(qualifications);
    });
  }

  prevSkillsPage(): void {
    let prevPage = this.skillsPage() - 1;
    if (prevPage < 0) {
      prevPage = 4;
    }
    this.animatePageChange(prevPage, false);
  }

  nextSkillsPage(): void {
    let nextPage = this.skillsPage() + 1;
    if (nextPage > 4) {
      nextPage = 0;
    }
    this.animatePageChange(nextPage, true);
  }

  updateSkills(): void {
    this.apiService.getSkills(this.skillsPage()).subscribe(skills => {
      this.skills.set(skills);
    });
  }

  private animatePageChange(newPage: number, next: boolean) {
    this.skills.update(current =>
      current.map(s => ({ ...s, state: next ? 'left' : 'right' }))
    );

    setTimeout(() => {
      this.skillsPage.set(newPage);
      this.apiService.getSkills(newPage).subscribe(skills => {
        this.skills.set(skills.map(s => ({ ...s, state: next ? 'right' : 'left' })));

        setTimeout(() => {
          this.skills.update(curr =>
            curr.map(s => ({ ...s, state: 'active' }))
          );
        }, 50); 
      });
    }, 100);
  }
}
