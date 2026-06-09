import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected menuOpen = false;

  protected lang = this.ls.lang;
  protected langBtnLabel = this.ls.langBtnLabel;

  toggleLang(): void { this.ls.toggle(); }
  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
}
