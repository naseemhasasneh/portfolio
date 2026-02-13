import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};
@Component({
  selector: 'app-projects',
  imports:[MatCardModule, MatChipsModule, MatButtonModule,ObserveSectionDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})



export class Projects {
 projects: Project[] = [
    {
      title: 'Microservices E-Commerce API',
      description:
        'Distributed services with .NET 8, API Gateway, JWT auth, Docker, and SQL Server. Designed with clean architecture and strong separation of concerns.',
      tech: ['.NET 8', 'Microservices', 'Docker', 'EF Core', 'SQL Server', 'JWT', 'Ocelot'],
      github: 'https://github.com/your-username/your-repo',
    },
    {
      title: 'Real-Time Chat System',
      description:
        'A real-time messaging platform using SignalR with authentication, message persistence, and Angular frontend integration.',
      tech: ['.NET', 'SignalR', 'Angular', 'JWT', 'SQL Server'],
      github: 'https://github.com/your-username/your-repo',
    },
    {
      title: 'Medical Insurance System',
      description:
        'Enterprise-grade system work: APIs, data modeling, and performance-focused improvements. (Details summarized due to confidentiality.)',
      tech: ['.NET', 'EF Core', 'SQL Server', 'Angular'],
    },
  ];
}
