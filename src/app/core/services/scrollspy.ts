import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpy {
  activeId = signal<string>('');

  setActive(id: string) {
    this.activeId.set(id);
  }
}