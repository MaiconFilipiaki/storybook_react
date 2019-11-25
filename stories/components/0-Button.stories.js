import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../src/components/button';

storiesOf('Components|Button', module)
    .add('with text', () => (
        <Button
            label="TEste maicon"
        />
    ), {
        info: {
            text: 'TEXTO DE AJUDA'
        }
    })
    .add('TES MAICON', () => (
        <Button
            label="TEste DOUGLAS"
        />
    ))
