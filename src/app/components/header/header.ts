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
  private readonly _themeService = inject(ThemeService);
  private readonly _breakpointService = inject(BreakpointService);
  private readonly _navigateService = inject(NavigateService);

  readonly isMenuOpen = signal(false);

  readonly routes: Route[] = [
    {
      label: 'header.home',
      link: '/',
      disabled: false
    },
    {
      label: 'header.about',
      link: '/about',
      disabled: false
    },
    {
      label: 'header.redux',
      link: '/redux',
      disabled: false
    },
    {
      label: 'header.sfdct',
      link: '/sfdct',
      disabled: true
    },
    {
      label: 'header.loader',
      link: '/loader',
      disabled: true
    },
    {
      label: 'header.browser',
      link: '/browser',
      disabled: true
    },
    {
      label: 'header.workshop',
      link: '/workshop',
      disabled: true
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  isMobile(): boolean {
    return this._breakpointService.isMobile();
  }

  navigate(route: string): void {
    this.closeMenu();
    this._navigateService.toPage(route);
  }

  visitGithub(): void {
    window.open('https://github.com/MythoFame', '_blank');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}

type Route = {
  label: string;
  link: string;
  disabled: boolean;
};
