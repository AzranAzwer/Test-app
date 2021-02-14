import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {Text} from '../components/atoms';
import {CenterView} from './CenterView';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Text fontSize="30px" fontColor="#000000">
      Testhhh
    </Text>
  ));
