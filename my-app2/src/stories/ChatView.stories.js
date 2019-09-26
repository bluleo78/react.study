import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatView from '../components/ChatView';

storiesOf('ChatView', module)
  .add('default', () => <ChatView userName="Mary" />);
