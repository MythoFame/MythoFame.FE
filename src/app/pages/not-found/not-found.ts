import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'not-found',
  imports: [TranslatePipe],
  templateUrl: './not-found.html',
  encapsulation: ViewEncapsulation.None
})
export class NotFound {}
