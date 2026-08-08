import { StyleService } from '@/services/style';
import { Component, computed, inject, input, output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'm-button',
  imports: [],
  templateUrl: './button.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  private readonly _styleService = inject(StyleService);

  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly onClick = output();

  readonly kind = input<'primary' | 'secondary' | 'transparent'>('primary');
  readonly css = computed(() => {
    let style = '';
    const kind = this.kind();

    if (this.disabled())
      style = this._styleService.merge(style, 'bg-muted hover:bg-muted/90 text-foreground/70 hover:text-foreground/50');

    switch (kind) {
      case 'primary':
        style = this._styleService.merge(style, 'bg-primary hover:bg-primary/90');
        break;

      case 'secondary':
        style = this._styleService.merge(style, 'bg-secondary hover:bg-secondary/80');
        break;

      case 'transparent':
        style = this._styleService.merge(style, 'bg-transparent hover:bg-muted');
        break;
    }

    return style;
  });
}
