import { CommonModule } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('SMButton', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
  });

  it('should apply class base on type attribute', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;

    component.type = 'primary';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.classList.contains('primary')).toBe(true);

    component.type = 'secondary';
    expect(fixture.debugElement.nativeElement.classList.contains('secondary')).toBe(true);
  });
});
