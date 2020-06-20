import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent).add('default', {
  template: '<ui-button></ui-button>',
});
