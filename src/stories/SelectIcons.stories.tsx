import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {Selector} from '../components/molucules';
import {CenterView} from './CenterView'

storiesOf('SelectorIcons',module)
.addDecorator((getStory)=><CenterView>{getStory()}</CenterView>)
.add('default',()=>(
  <Selector />
));







