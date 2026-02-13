import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';
type SkillGroup = {
  title: string;
  items: string[];
};
@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatChipsModule,ObserveSectionDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
    groups: SkillGroup[] = [
    {
      title: 'Backend',
      items: [
        '.NET / ASP.NET Core',
        'REST APIs',
        'EF Core',
        'Authentication (JWT)',
        'SignalR (Real-time)',
        'Clean Architecture',
      ],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'Kendo UI', 'HTML/CSS/SCSS'],
    },
    {
      title: 'Database',
      items: ['SQL Server', 'Schema Design', 'Query Tuning', 'Indexes', 'Stored Procedures'],
    },
    {
      title: 'Tools & Dev Practices',
      items: ['Git/GitHub', 'Docker', 'Unit Testing', 'Debugging', 'Performance Optimization'],
    },
  ];
}
