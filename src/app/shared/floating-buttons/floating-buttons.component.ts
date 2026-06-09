import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-floating-buttons',
  imports: [],
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss'
})
export class FloatingButtonsComponent {
  protected readonly cs = inject(ContactService);
}
