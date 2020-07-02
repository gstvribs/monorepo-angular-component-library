import { addDecorator, addParameters } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  web: {
    name: 'Web',
    styles: {
      width: '1920px',
      height: '820px',
    },
  },
};

setCompodocJson(docJson);
addDecorator(withKnobs);
addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: 60,
  },
  viewport: {
    viewports: newViewports,
    defaultViewport: 'mobile',
  },
});
