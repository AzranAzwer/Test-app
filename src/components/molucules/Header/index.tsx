import React, {FC} from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeaderComponent: FC = () => {
  const left = <Icon name="bars" size={30} color="#000080" />;
  const right = <Icon name="paste" size={30} color="#000080" />;

  return (
    <Header
      leftComponent={left}
      centerComponent={{
        text: 'ToDo List',
        style: {color: '#000080', fontSize: 20},
      }}
      rightComponent={right}
      containerStyle={{
        backgroundColor: '#ffffff',
      }}
    />
  );
};
