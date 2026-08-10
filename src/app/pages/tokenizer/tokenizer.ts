import { ButtonComponent } from '@/components/button/button';
import { InputComponent } from '@/components/input/input';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tokenizer',
  imports: [ButtonComponent, InputComponent, TranslatePipe, ClipboardModule],
  templateUrl: './tokenizer.html',
  encapsulation: ViewEncapsulation.None
})
export class Tokenizer {
  private readonly _clipBoard = inject(Clipboard);

  readonly mapModel = signal<MapData>({
    author: '',
    mapName: ''
  });

  readonly token = signal<string | undefined>(undefined);

  mapForm = form(this.mapModel, (schema) => {
    required(schema.author);
    required(schema.mapName);
  });

  onSubmit(): void {
    const mapData = this.mapForm().value();
    this.token.set(this.generateToken(mapData.author, mapData.mapName));
    console.log(this.token());
  }

  generateToken(author: string, mapName: string): string {
    const header = mapName + author;

    let array = '0123456789'.split('');
    const length = array.length;

    for (let i = 0; i < header.length; i++) {
      let index = i % length;

      let newCharCode = array[index].charCodeAt(0) + header.charCodeAt(index);
      array[index] = String.fromCharCode(newCharCode);
    }

    array[0] = '1';

    const bytes = new TextEncoder().encode(array.join(''));
    const token = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();

    return token;
  }

  copy(): void {
    this._clipBoard.copy(this.token() ?? '');
  }
}

export type MapData = {
  author: string;
  mapName: string;
};
