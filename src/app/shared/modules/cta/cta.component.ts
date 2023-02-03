import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  constructor() {}

  register() {
    window.location.href = 'http://app.elitemente.com/auth/register';
  }
}
