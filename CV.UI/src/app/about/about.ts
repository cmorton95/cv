import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Hobby } from '../models/hobby';

@Component({
  selector: 'about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  constructor(private apiService: ApiService) {}
  
  hobbies: WritableSignal<Hobby[]> = signal([]);

  ngOnInit(): void {
    this.apiService.getHobbies().subscribe(hobbies => {
      this.hobbies.set(hobbies);
    })
  }
}
