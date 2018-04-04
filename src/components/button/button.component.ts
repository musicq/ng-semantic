import { Component, Input, HostBinding, ElementRef } from '@angular/core';

type COLOR_PATTERN = 'primary' | 'secondary' | '';

@Component({
  selector: '[se-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  private _type: COLOR_PATTERN;

  @Input()
  set type(value: COLOR_PATTERN) {
    value = value || '';

    if (value !== this._type) {
      if (this._type) {
        (this.elementRef.nativeElement as HTMLElement).classList.remove(this._type);
      }
      if (value) {
        (this.elementRef.nativeElement as HTMLElement).classList.add(value);
      }

      this._type = value;
    }
  }

  constructor(private elementRef: ElementRef) {}
}
