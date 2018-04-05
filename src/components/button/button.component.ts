import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

type COLOR_PATTERN = 'primary' | 'secondary' | '';

const BUTTON_HOST_ATTRIBUTES = [
  'sm-button'
];

@Component({
  selector: '[sm-button]',
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

@Directive({
  selector: '[sm-button-toggle]'
})
export class ButtonToggleDirective {
  @Output() change = new EventEmitter<boolean>();
  private _checked: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  @Input('sm-button-toggle') set toggle(status: boolean) {
    this._checked = status;
    this.toggleActive();
  }

  @HostListener('click') onClick() {
    this._checked = !this._checked;
    this.toggleActive();
  }

  private toggleActive() {
    (this.elementRef.nativeElement as HTMLElement).classList[this._checked ? 'add' : 'remove']('active');
    this.change.emit(this._checked);
  }
}
