import { StyleService } from '@/services/style';
import { Component, computed, inject, input, output, signal, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'm-card',
  imports: [TranslatePipe],
  templateUrl: './card.html',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  private readonly _styleService = inject(StyleService);

  private readonly _reflectionX = signal(50);
  private readonly _reflectionY = signal(50);

  readonly titleAlign = input<'left' | 'center' | 'right'>('left');
  readonly title = input('');

  readonly descriptionAlign = input<'left' | 'center' | 'right' | 'justify'>('left');
  readonly description = input('');
  readonly onClick = output();

  readonly kind = input<'primary' | 'secondary' | 'transparent'>('transparent');
  readonly cardCss = computed(() => {
    let style = '';
    const kind = this.kind();

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

  readonly titleCss = computed(() => {
    let style = '';
    const align = this.titleAlign();

    switch (align) {
      case 'left':
        style = this._styleService.merge(style, 'text-left');
        break;

      case 'center':
        style = this._styleService.merge(style, 'text-center');
        break;

      case 'right':
        style = this._styleService.merge(style, 'text-right');
        break;
    }

    return style;
  });

  readonly descriptionCss = computed(() => {
    let style = '';
    const align = this.descriptionAlign();

    switch (align) {
      case 'left':
        style = this._styleService.merge(style, 'text-left');
        break;

      case 'center':
        style = this._styleService.merge(style, 'text-center');
        break;

      case 'right':
        style = this._styleService.merge(style, 'text-right');
        break;

      case 'justify':
        style = this._styleService.merge(style, 'text-justify');
        break;
    }

    return style;
  });

  readonly textCss = computed(() => {
    let style = '';
    const kind = this.kind();

    switch (kind) {
      case 'primary':
        style = this._styleService.merge(style, 'text-primary-foreground');
        break;

      case 'secondary':
        style = this._styleService.merge(style, 'text-secondary-foreground');
        break;

      case 'transparent':
        style = this._styleService.merge(style, 'text-muted-foreground');
        break;
    }

    return style;
  });

  readonly reflectionCss = computed(() => {
    const x = this._reflectionX();
    const y = this._reflectionY();

    return `
      radial-gradient(
        circle 220px at ${x}% ${y}%,
        rgba(255, 255, 255, 0.18),
        transparent 70%
      )
    `;
  });

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this._reflectionX.set(x);
    this._reflectionY.set(y);
  }
}
