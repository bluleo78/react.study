import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Board from '../board.js';

storiesOf('Board', module)
  .add('initial',() => <Board squares={Array(9).fill(null)} onClick={action('onClick')}/>);

