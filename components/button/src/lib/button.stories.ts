import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [withKnobs],
};

const optionsAction = {
  Button: 'button',
  Submit: 'submit',
  Reset: 'reset',
};
const defaultValueAction = 'button';

const optionsType = {
  Primario: 'primary',
  Segundario: 'secondary',
  Outline: 'outline',
};

export const primario = () => ({
  component: ButtonComponent,
  props: {
    action: select('action', optionsAction, defaultValueAction),
    type: select('type', optionsType, 'primary'),
    text: text('text', 'Click Here!'),
    ariaPressed: boolean('ariaPressed', false),
    ariaLabel: text('ariaLabel', ''),
    onClick: action('button-click'),
  },
});

export const segundario = () => ({
  component: ButtonComponent,
  props: {
    action: select('action', optionsAction, defaultValueAction),
    type: select('type', optionsType, 'secondary'),
    text: text('text', 'Click Here!'),
    ariaPressed: boolean('ariaPressed', false),
    ariaLabel: text('ariaLabel', ''),
    onClick: action('button-click'),
  },
});

export const outline = () => ({
  component: ButtonComponent,
  props: {
    action: select('action', optionsAction, defaultValueAction),
    type: select('type', optionsType, 'outline'),
    text: text('text', 'Click Here!'),
    ariaPressed: boolean('ariaPressed', false),
    ariaLabel: text('ariaLabel', ''),
    onClick: action('button-click'),
  },
});
