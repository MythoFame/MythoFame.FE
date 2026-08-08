import { BreakpointService } from '@/services/breakpoint';
import { Component, HostListener, ViewEncapsulation, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'm-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  readonly breakpoint = inject(BreakpointService);
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
      link: '/sfr'
    },
    {
      label: 'header.loader',
      link: '/mbl'
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
