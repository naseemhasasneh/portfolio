import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Projects } from '../projects/projects';
import { MatChipsModule } from '@angular/material/chips';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';

@Component({
  selector: 'app-about',
  imports: [MatChipsModule,ObserveSectionDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
 highlights = [
    'ASP.NET Core / .NET',
    'Angular',
    'SQL Server',
    'EF Core',
    'Kendo UI',
    'REST APIs',
    'Clean Architecture',
  ];
}
