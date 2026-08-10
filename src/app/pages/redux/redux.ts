import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'redux',
  imports: [TranslatePipe],
  templateUrl: './redux.html',
  encapsulation: ViewEncapsulation.None
})
export class Redux {}
