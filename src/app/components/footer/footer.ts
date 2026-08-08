import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'm-footer',
  imports: [DatePipe, TranslatePipe],
  templateUrl: './footer.html',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  readonly today = Date.now();
}
