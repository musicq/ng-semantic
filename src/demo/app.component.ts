import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleStatus: boolean = true;

  onChange(toggle: boolean) {
    this.toggleStatus = toggle;
  }
}
