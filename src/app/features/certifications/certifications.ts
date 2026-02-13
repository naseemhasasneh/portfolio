import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

type Certification = {
  title: string;
  issuer: string;
  date?: string;
  details?: string;
  credentialUrl?: string;
};
@Component({
  selector: 'app-certifications',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
   certifications: Certification[] = [
    // Replace these with your real certs
    {
      title: 'ASP.NET Core Microservices',
      issuer: 'Udemy',
      date: '2024',
      details: 'Microservices fundamentals, Docker, API Gateway, and distributed patterns.',
      credentialUrl: 'https://example.com',
    },
    {
      title: 'Angular (Advanced) / Modern Angular',
      issuer: 'Udemy / Coursera',
      date: '2024',
      details: 'Standalone components, routing, RxJS, best practices.',
    },
    {
      title: 'SQL Server Performance & Query Tuning',
      issuer: 'Course / Training',
      date: '2023',
      details: 'Indexes, execution plans, and query optimization.',
    },
  ];
}
