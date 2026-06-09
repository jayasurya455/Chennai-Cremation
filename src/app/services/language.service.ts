import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<'en' | 'ta'>('en');
  readonly langBtnLabel = computed(() => this.lang() === 'en' ? 'தமிழ்' : 'EN');

  toggle(): void {
    this.lang.update(l => l === 'en' ? 'ta' : 'en');
    document.documentElement.lang = this.lang() === 'ta' ? 'ta' : 'en';
  }
}
