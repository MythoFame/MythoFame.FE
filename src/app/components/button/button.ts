import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'm-button',
  imports: [TranslatePipe],
  templateUrl: './button.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  readonly text = input<string>();
  readonly icon = input<string>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  readonly onClick = output();
}
