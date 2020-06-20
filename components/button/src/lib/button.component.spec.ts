import { TestBed, async } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));

  it('should create the button', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  });
});
