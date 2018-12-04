import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import * as Icons from './icons';

const customTheme = {
  global: {
    colors: {
      icon: '#2196f3',
      attention: '#ff3333',
    },
  },
  icon: {
    size: {
      xlarge: '300px',
    },
  },
};

storiesOf('Icon', module)
  .add('Default', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return <Icon />;
  })
  .add('Color', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeProvider theme={customTheme}>
        <Icon size={text('Size', 'xlarge')} color={text('Color', 'attention')} />
      </ThemeProvider>
    );
  })
  .add('Plain', () => (
    <Icons.Facebook color='plain' />
    ))
  .add('Custom Theme', () => {
    const Icon = Icons[text('Icon', 'Accessibility')];
    if (!Icon) {
      return null;
    }
    return (
      <ThemeProvider theme={customTheme}>
        <Icon size={text('Size', 'xlarge')} />
      </ThemeProvider>
    );
  });
