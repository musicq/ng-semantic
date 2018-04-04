import { Component, Input } from '@angular/core';

@Component({
  selector: 'se-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  @Input() type = '';
}
