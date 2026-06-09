import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-pet-services',
  imports: [],
  templateUrl: './pet-services.component.html',
  styleUrl: './pet-services.component.scss'
})
export class PetServicesComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected lang = this.ls.lang;
}
