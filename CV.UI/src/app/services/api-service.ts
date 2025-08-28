import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkExperience } from '../models/work-experience';
import { Skill } from '../models/skill';
import { Qualification } from '../models/qualification';
import { Hobby } from '../models/hobby';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getIntroduction(): Observable<string> {
    const introduction: string = "Hi, I'm Connor. I just joined the 30's club and have been a technology enthusiast and professional software developer for most of those years. " + 
    "I began hobbyist software development as a teenager, with roots in Java, SQL and C(++). Since then, I've graduated university with a 2-1 " +
    "and moved on to gain 10 years of professional software development experience, primarily in the .NET stack and cloud technologies. I " +
    "perform best as a core member of a team, and love to help and mentor others whilst also learning alongside them. "; //TODO replace with API call
    return of(introduction);
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    const workExperience: WorkExperience[] = [
      { 
        name: "Monek", type: "Full-time", startDate: new Date(2023, 11), endDate: new Date(2025, 9), 
        description: "Full-stack C#, Java, and Angular/NodeJS greenfield and legacy projects built on AWS, Kafka and Flink, handling various parts of the onboarding pipeline, transaction processing pipeline and customer portal." 
      },
      { 
        name: "First Response Finance", type: "Full-time", startDate: new Date(2023, 1), endDate: new Date(2023, 11), 
        description: "Full-stack greenfield C# .NET 7 project on Azure cloud based solutions using Blazor WASM, MudBlazor and EF Core." 
      },
      { 
        name: "TopCashback", type: "Full-time", startDate: new Date(2021, 9), endDate: new Date(2023, 1), 
        description: "Full-stack greenfield projects and maintenance of legacy .NET applications using C#, VB, SQL Server and AngularJS. Some work in AWS using Lambdas and S3." 
      },
      { 
        name: "Stratus21", type: "Full-time", startDate: new Date(2021, 4), endDate: new Date(2021, 9), 
        description: "Full-stack .NET 5 and Blazor client-side (WASM). Managing databases with EF Core and SQL Server. Publishing multi-tenant web applications on azure cloud." 
      },
      { 
        name: "Boldon James", type: "Full-time/Part-time", startDate: new Date(2015, 6), endDate: new Date(2021, 4), 
        description: "Software development and formal testing in both .NET Core and .NET Framework using WPF and ASP.NET MVC, JS front-end including vanilla JS and ReactJS. Extensive automation of integration tests in PowerShell" 
      }
    ]; //TODO replace with API call
    return of(workExperience);
  }

  getSkills(page: number): Observable<Skill[]> {
    const skills: Skill[] = [
      { name: "C#", rating: 3 },
      { name: "EF Core", rating: 3 },
      { name: ".NET Core", rating: 3 },
      { name: "TypeScript", rating: 3 },
      { name: "Angular 2+", rating: 3 },
      { name: "Git", rating: 3 },
      { name: "ReactJS", rating: 1 },
      { name: "Node", rating: 2 },
      { name: "CSS/SASS", rating: 2 },
      { name: "Java", rating: 2 },
      { name: "Kafka", rating: 2 },
      { name: "Flink", rating: 2 },
      { name: "RabbitMQ", rating: 1 },
      { name: "MassTransit", rating: 1 },
      { name: "PowerShell", rating: 3 },
      { name: "xUnit", rating: 3 },
      { name: "JUnit", rating: 2 },
      { name: "Selenium", rating: 1 },
      { name: "NPM", rating: 2 },
      { name: "NuGet", rating: 3 },
      { name: "GitHub Workflows", rating: 2 },
      { name: "AWS", rating: 2 },
      { name: "CloudFormation", rating: 2 },
      { name: "EC2", rating: 1 },
      { name: "Docker", rating: 2 },
      { name: "TFS", rating: 1 },
      { name: "PostgreSQL", rating: 2 },
      { name: "SQL Server", rating: 2 },
      { name: "Jira", rating: 3 },
      { name: "Crucible", rating: 1 },

    ]; //TODO replace with API call

    const start = page * 6;
    const take = start + 6;

    return of(skills.slice(start, take));
  }

  getQualifications(): Observable<Qualification[]> {
    const qualificatons: Qualification[] = [
      { 
        name: "Computer Science BSc (Hons)", date: new Date(2017, 7),
        topics: [
          "Low-level (C/ASM) programming of safety-critical and real-time systems",
          "Development of modern GUIs in C++.",
          "Methodologies and design principles in object-oriented programming.",
          "Emerging technologies, theory in cloud computing and AI.",
          "Ethical programming."
        ],
        grade: "2-1"
      },
      { 
        name: "Microsoft Certified Solutions Developer - App Builder", date: new Date(2019, 4), 
        topics: [
          "70-483, Programming in C#.", 
          "70-486, Developing ASP.NET MVC Web Applications.", 
          "70-487, Developing Microsoft Azure and Web Services."
        ],
        grade: "80%" 
      },
      {
        name: "A-Levels", date: new Date(2013, 7),
        topics: [
          "Electronics",
          "Physics",
          "Maths"
        ],
        grade: "BDD"
      },
      {
        name: "GCSEs", date: new Date(2011, 7),
        topics: [

        ],
        grade: "A: 3, B: 5, C: 4"
      }
    ]; //TODO replace with API call
    return of(qualificatons);
  }

  getHobbies(): Observable<Hobby[]> {
    const hobbies: Hobby[] = [
      { 
        name: 'Space', 
        image: 'https://www.nasa.gov/wp-content/uploads/2022/10/stsci-01gfnn3pwjmy4rqxkz585bc4qh.png', 
        description: "I have a strong fascination with space. For as long as I can remember, it's intrigued me to explore the unknown." 
      },
      {
        name: 'Magic the Gathering',
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421590509/the-art-of-magic-the-gathering-kaladesh-9781421590509_hr.jpg',
        description: 'Currently deeply obsessed with collecting fancy cardboard. Playing games of commander with my friends rarely gets old!'
      },
      {
        name: 'Video Games',
        image: 'https://www.punchtechnology.co.uk/wp-content/uploads/2025/03/P500CWmain.webp',
        description: "My evergreen passion is, and probably always will be, Video Games. If you ever need to find me, it's fair to assume I'm at my PC."
      },
      {
        name: 'Mountain Biking',
        image: 'https://off.road.cc/sites/default/files/styles/640body/public/thumbnails/image/2022%20rampage%20riding1.jpg?itok=UKD0MkZT',
        description: "I love mountain biking, nothing quite clears your mind like rushing down a dirt trail a bit too quickly. Unfortunately I am between bikes at the moment as my bike was stolen, RIP, I'll never forget you. 💔"
      }
    ];
    return of(hobbies);
  }
}
