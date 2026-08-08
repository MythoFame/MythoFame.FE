import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class Root {}
