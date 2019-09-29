import React from 'react';
import { storiesOf } from '@storybook/react';

import UserInfoView from '../components/UserInfoView';

storiesOf('UserInfoView', module)
  .add('default', () => <UserInfoView currentUser={{ name: 'Mary' }} selectedUserName="Mary" />)
  .add('show user but not editable', () => <UserInfoView currentUser={{ name: 'Tom' }} selectedUserName="Mary" />);
