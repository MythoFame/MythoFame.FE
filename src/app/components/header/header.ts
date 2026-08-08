import { BreakpointService } from '@/services/breakpoint';
import { NavigateService } from '@/services/navigate';
import { ThemeService } from '@/services/theme';
import { NgClass } from '@angular/common';
import { Component, HostListener, ViewEncapsulation, inject, signal } from '@angular/core';
import { LucideChevronRight, LucideSunMoon } from '@lucide/angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'm-header',
  imports: [TranslatePipe, LucideSunMoon, LucideChevronRight, ButtonComponent, NgClass],
  templateUrl: './header.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  readonly breakpoint = inject(BreakpointService);
  readonly navigate = inject(NavigateService);
  readonly isMenuOpen = signal(false);

  readonly routes: Route[] = [
    {
      label: 'header.home',
      link: '/'
    },
    {
      label: 'header.about',
      link: '/about'
    },
    {
      label: 'header.redux',
      link: '/redux'
    },
    {
      label: 'header.loader',
      link: '/loader'
    },
    {
      label: 'header.workshop',
      link: '/workshop'
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}

type Route = {
  label: string;
  link: string;
};
