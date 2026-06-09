import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected lang = this.ls.lang;

  hideHeroImg(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
