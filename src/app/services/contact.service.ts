import { Injectable } from '@angular/core';

export const CONTACT = {
  phone: '8248395391',
  phoneAlt: '9791336571',
  waNumber: '918248395391',
  instagram: 'https://instagram.com/chennaicremation',
  callHref: 'tel:+918248395391',
  waMsg: 'Hello, I need assistance with funeral/cremation services. Please call me back.',
  get waHref() {
    return `https://wa.me/${this.waNumber}?text=${encodeURIComponent(this.waMsg)}`;
  }
};

@Injectable({ providedIn: 'root' })
export class ContactService {
  readonly phone = CONTACT.phone;
  readonly phoneAlt = CONTACT.phoneAlt;
  readonly callHref = CONTACT.callHref;
  readonly waHref = CONTACT.waHref;
  readonly instagram = CONTACT.instagram;

  buildEnquiryWaHref(name: string, phone: string, message: string): string {
    const text = `New enquiry — Chennai Final Journey\nName: ${name}\nPhone: ${phone}\nMessage: ${message || '(none)'}`;
    return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(text)}`;
  }
}
