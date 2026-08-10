import { StyleService } from '@/services/style';
import { Component, computed, inject, input, ViewEncapsulation } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'm-input',
  imports: [TranslatePipe, FormField],
  templateUrl: './input.html',
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  private readonly _styleService = inject(StyleService);

  readonly type = input<'text' | 'checkbox' | 'date' | 'number' | 'password' | 'email'>('text');

  readonly text = input('');
  readonly id = input.required<string>();
  readonly field = input.required<FieldTree<string | number | boolean | Date>>();

  readonly kind = input<'primary' | 'secondary' | 'transparent'>('secondary');
  readonly css = computed(() => {
    let style = '';
    const kind = this.kind();

    switch (kind) {
      case 'primary':
        style = this._styleService.merge(style, 'bg-primary hover:bg-primary/90');
        break;

      case 'secondary':
        style = this._styleService.merge(style, 'bg-secondary hover:bg-secondary/70');
        break;

      case 'transparent':
        style = this._styleService.merge(style, 'bg-transparent hover:bg-muted');
        break;
    }

    return style;
  });
}
