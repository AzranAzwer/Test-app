import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {ItemContainer} from '../components/organisms';
import {CenterView} from './CenterView';
import {Text} from '../components/atoms';

storiesOf('Item', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Pending', () => (
    <ItemContainer 
    toDo="pending"
    title="Refinement (Based on Feedback)"
    time=" -3 days left"
    />
  ))
  .add('Next', () => (
    <ItemContainer
    toDo="next"
    title="FinalDesign Approval"
    time="Tomorrow" 
    />
  ))
   .add('Completed', () => (
    <ItemContainer 
     toDo="done"
    title="Review #2: Dropdown"
    time="Today" 
    />
  ))
  ;
