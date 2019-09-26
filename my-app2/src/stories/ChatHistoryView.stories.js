import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatHistoryView from '../components/ChatHistoryView';

storiesOf('ChatHistoryView', module)
  .add('default', () => <ChatHistoryView />);

storiesOf('ChatHistoryView', module)
  .add('someone says', () => <ChatHistoryView messages={[{ type: 'user', sender: 'Mary', text: 'Hahah' }]} />);

storiesOf('ChatHistoryView', module)
  .add('someone has joined', () => <ChatHistoryView messages={[{ type: 'welcome', receiver: 'Mary' }]} />);

storiesOf('ChatHistoryView', module)
  .add('I has joined', () => <ChatHistoryView currentUser={{ name: 'Mary' }} messages={[{ type: 'welcome', receiver: 'Mary' }]} />);

storiesOf('ChatHistoryView', module)
  .add('I has joined', () => <ChatHistoryView currentUser={{ name: 'Mary' }} messages={[{ type: 'welcome', receiver: 'Mary' }]} />);

storiesOf('ChatHistoryView', module)
  .add('check chat history', () => (
    <ChatHistoryView
      currentUser={{ name: 'Mary' }}
      messages={[
        {
          id: 1, type: 'welcome', receiver: 'Mary',
        },
        {
          id: 2, type: 'welcome', receiver: 'Tom',
        },
        {
          id: 3, type: 'user', sender: 'Tom', text: 'Hi',
        },
        {
          id: 4, type: 'user', sender: 'Mary', text: 'Hi Tom',
        },
      ]}
    />
  ));
