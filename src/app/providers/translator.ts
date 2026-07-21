import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  InterpolatableTranslationObject,
  TranslateLoader,
  TranslateService,
  TranslationObject
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as en from '../../../public/i18n/en.json';
import * as es from '../../../public/i18n/es.json';
import * as it from '../../../public/i18n/it.json';

export class TranslateHttpLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    switch (lang) {
      case 'en':
        return of(en as TranslationObject);

      case 'es':
        return of(es as TranslationObject);

      case 'it':
        return of(it as TranslationObject);

      default:
        return of({} as TranslationObject);
    }
  }
}

export function initTranslate(): Observable<InterpolatableTranslationObject> {
  const translate = inject(TranslateService);
  translate.addLangs(['en', 'es', 'it']);

  const forcedLang = 'en'; // or undefined
  const availableLangs = translate.getLangs();
  const browserLang = forcedLang ?? translate.getBrowserLang();
  const storedLang = localStorage.getItem('lang');

  const lang = availableLangs.find((l) => l === (storedLang ?? browserLang)) ?? 'en';
  localStorage.setItem('lang', lang);

  return translate.use(lang).pipe(takeUntilDestroyed());
}
