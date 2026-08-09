import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  encapsulation: ViewEncapsulation.None
})
export class About {}
