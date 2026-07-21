import { computed, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  readonly sm = 640;
  readonly md = 768;
  readonly lg = 1024;
  readonly xl = 1280;
  readonly xxl = 1536;

  readonly size = signal(window.innerWidth);

  readonly isMobile = computed(() => {
    const size = this.size();
    return size < this.md;
  });

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.size.set(window.innerWidth);
      });
  }
}
