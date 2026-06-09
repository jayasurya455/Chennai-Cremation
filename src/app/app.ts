import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FloatingButtonsComponent } from './shared/floating-buttons/floating-buttons.component';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingButtonsComponent, BottomNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
