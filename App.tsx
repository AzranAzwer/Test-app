import React from 'react';
import {Home} from './src/components/pages';
import Storybook from './storybook';
import {Style} from './App.styles'

let App;

// to run App

  App = () => {
    return (
    <Style>
        <Home />
    </Style>
    )
};

// to run storybook

// App = Storybook;

export default App;
