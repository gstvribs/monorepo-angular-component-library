import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() ariaLabel: string;
  @Input() ariaPressed: boolean;
  @Input() type: 'primary' | 'secondary' | 'outline';
  @Input() action: 'button' | 'submit' | 'reset';
  @Input() onClick: () => void;

  ngOnInit(): void {}
}
