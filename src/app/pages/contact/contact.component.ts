import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly ls = inject(LanguageService);
  protected readonly cs = inject(ContactService);
  protected lang = this.ls.lang;

  formName = '';
  formPhone = '';
  formMsg = '';
  formSent = false;

  submitEnquiry(): void {
    if (!this.formName.trim() || !this.formPhone.trim()) {
      alert('Please enter your name and phone number so we can reach you.');
      return;
    }
    const href = this.cs.buildEnquiryWaHref(this.formName.trim(), this.formPhone.trim(), this.formMsg.trim());
    window.open(href, '_blank', 'noopener');
    this.formName = '';
    this.formPhone = '';
    this.formMsg = '';
    this.formSent = true;
  }
}
