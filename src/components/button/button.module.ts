import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent, ButtonToggleDirective } from './button.component';

const COMPONENTS = [
  ButtonComponent,
  ButtonToggleDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class ButtonModule {
}
