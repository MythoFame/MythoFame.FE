import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'm-footer',
  imports: [],
  templateUrl: './footer.html',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  readonly today = Date.now();
}
