import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

interface Config {
  contactPhone: string;
  whatsappNumber: string;
  instagram: string;
}

@Injectable({ providedIn: 'root' })

export class ContactService {
  private config: Config = {
    contactPhone: environment.contactPhone,
    whatsappNumber: environment.waNumber,
    instagram: environment.instagram,
  };


  phone: string = this.config.contactPhone;
  callHref: string = `tel:+91${this.config.contactPhone}`;
  instagram: string = this.config.instagram;
  waMsg: string = 'Hello, I need assistance with funeral/cremation services. Please call me back.';
  waHref: string = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(this.waMsg)}`

  buildEnquiryWaHref(name: string, phone: string, message: string): string {
    const text = `New enquiry — Chennai Final Journey\nName: ${name}\nPhone: ${phone}\nMessage: ${message || '(none)'}`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
}
