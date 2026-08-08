import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  private readonly _router = inject(Router);

  page(route: string): void {
    this._router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }
}
