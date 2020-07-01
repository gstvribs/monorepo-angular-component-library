import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent).add('primary', {
  template:
    '<ui-button action="button" type="primary" text="Button Primary" ariaLabel="Button Primary" ariaPressed="true"></ui-button>',
});
