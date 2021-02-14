import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {Heading} from '../components/molucules';
import {CenterView} from './CenterView';
import {Text} from '../components/atoms';

storiesOf('Heading', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Heading 
    title="Design System"
    iconName="layer-group"
    fontSize="28px"
    />
  ))
  .add('SubHeading', () => (
    <Heading 
    title="Drop 2"
    iconName="calendar-check-o"
    fontSize="24px"
    date="Feb 22"
    />
  ))
  ;
