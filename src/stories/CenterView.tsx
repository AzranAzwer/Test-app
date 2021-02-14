import React from 'react';
import {View} from 'react-native';

export const CenterView = ({children}: {children: any}): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ccd8e7'
      }}>
      {children}
    </View>
  );
};
