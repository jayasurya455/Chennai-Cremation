import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-human-services',
  imports: [],
  templateUrl: './human-services.component.html',
  styleUrl: './human-services.component.scss'
})
export class HumanServicesComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected lang = this.ls.lang;
}
