import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'testing-cart-entry',
  template: `<testing-nx-welcome></testing-nx-welcome>`,
})
export class RemoteEntryComponent {}
