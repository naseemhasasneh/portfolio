import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';
type Principle = { title: string; desc: string; icon: string };

@Component({
  selector: 'app-principles',
  imports: [MatCardModule, MatIconModule,ObserveSectionDirective],
  templateUrl: './principles.html',
  styleUrl: './principles.scss',
})
export class Principles {
   items: Principle[] = [
    { title: 'Clean Architecture', desc: 'Clear separation of concerns, maintainable layers, testable code.', icon: 'layers' },
    { title: 'Performance Mindset', desc: 'Query tuning, indexing, caching, and profiling where it matters.', icon: 'speed' },
    { title: 'Secure APIs', desc: 'JWT auth, proper validation, least privilege, safe error handling.', icon: 'shield' },
    { title: 'Reliability', desc: 'Logging, predictable failures, and pragmatic resilience patterns.', icon: 'verified' },
    { title: 'DX & Quality', desc: 'Readable code, consistent structure, and unit testing for key logic.', icon: 'build_circle' },
  ];
}
