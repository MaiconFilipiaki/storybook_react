import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import theme from './customTheme';

const withGlobal = (Story) => (
    <>
        <Story />
    </>
);

addParameters({
    options: {
        theme,
    }
});
addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal)


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
