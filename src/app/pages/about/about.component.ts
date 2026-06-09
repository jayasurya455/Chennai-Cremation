import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected lang = this.ls.lang;
}
