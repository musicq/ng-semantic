import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

type COLOR_PATTERN = 'primary' | 'secondary' | '';

const BUTTON_HOST_ATTRIBUTES = [
  'se-button'
];

@Component({
  selector: '[se-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  constructor(private elementRef: ElementRef) {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttribute(attr)) {
        this.elementRef.nativeElement.classList.add(attr);
      }
    }
  }

  private _type: COLOR_PATTERN;

  @Input()
  set type(value: COLOR_PATTERN) {
    value = value || '';

    if (value !== this._type) {
      if (this._type) {
        this.hostElement.classList.remove(this._type);
      }
      if (value) {
        this.hostElement.classList.add(value);
      }

      this._type = value;
    }
  }

  private get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private _hasHostAttribute(attr: string) {
    return this.hostElement.hasAttribute(attr);
  }
}
