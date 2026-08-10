import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  merge(style: string, toMerge: string): string {
    if (style === '' || style.charAt(0) !== '') return ' ' + style + ' ' + toMerge;

    return style + ' ' + toMerge;
  }
}
