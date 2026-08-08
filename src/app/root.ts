import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { ThemeService } from './services/theme';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class Root {
  private readonly _theme = inject(ThemeService);

  constructor() {
    this._theme.init();
  }
}
