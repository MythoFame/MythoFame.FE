import { CardComponent } from '@/components/card/card';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'about',
  imports: [CardComponent, TranslatePipe],
  templateUrl: './about.html',
  encapsulation: ViewEncapsulation.None
})
export class About {}
