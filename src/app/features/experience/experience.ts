import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule,ObserveSectionDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

}
