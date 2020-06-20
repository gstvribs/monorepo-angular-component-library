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
  tablet: {
    name: 'Tablet',
    styles: {
      width: '1024px',
      height: '981px',
    },
  },
  web: {
    name: 'Web',
    styles: {
      width: '1920px',
      height: '810px',
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
    defaultViewport: 'someDefault',
  },
});
