import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ObserveSectionDirective } from '../../shared/directives/observe-section';

@Component({
  selector: 'app-contact',
  imports: [  MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ObserveSectionDirective,
    ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
    // TODO: replace with your real links
  email = 'your.email@example.com';
  linkedin = 'https://www.linkedin.com/in/your-profile';
  github = 'https://github.com/your-username';

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // For now: no backend. Later we can integrate EmailJS / Formspree / your .NET API.
    const payload = this.form.getRawValue();
    console.log('Contact form payload:', payload);
    this.form.reset();
  }
}
