import { routes } from '@/providers/routes';
import { initTranslate, TranslateHttpLoader } from '@/providers/translator';
import { Root } from '@/root';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideAppInitializer, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

const initFunctions = [initTranslate];

export const config: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideTranslateService({
      lang: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader,
        deps: [HttpClient]
      }
    }),
    provideAppInitializer(() => of(...initFunctions))
  ]
};

bootstrapApplication(Root, config).catch((e) => console.error(e));
