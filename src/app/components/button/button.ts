import { Component, computed, input, output, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'm-button',
  imports: [TranslatePipe],
  templateUrl: './button.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly onClick = output();

  readonly style = input<'primary' | 'secondary' | 'transparent'>('primary');
  readonly css = computed(() => {
    const style = this.style();

    switch (style) {
      case 'primary':
        return 'bg-primary';

      case 'secondary':
        return 'bg-secondary';

      case 'transparent':
        return 'bg-transparent';
    }
  });
}
