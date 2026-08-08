import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  merge(style: string, toMerge: string): string {
    if (style === '') return ' ' + toMerge;

    return style + ' ' + toMerge;
  }
}
