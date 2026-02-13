import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Projects } from '../projects/projects';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Certifications } from '../certifications/certifications';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, Projects,About,Experience,Certifications,Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
