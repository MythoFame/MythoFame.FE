import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer',
  imports: [],
  templateUrl: './footer.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class FooterComponent {
  readonly today = Date.now();
}
