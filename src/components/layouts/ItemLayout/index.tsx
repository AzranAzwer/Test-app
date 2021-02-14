import React, { FC } from 'react';
import { Container,ItemContainer } from './ItemLayout.styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Circle} from '../index'
import Icons from 'react-native-vector-icons/FontAwesome5';

interface ItemLayoutProps {
    color?:string;
    status:string;
}

export const ItemLayout: FC<ItemLayoutProps>= ({ children, color ="#9cadcc",status='todo'}) => {
  return (
    <Container>
        <Circle color={color}>
          {status === 'done'? 
           <Icons name='check-double' size={20} color="#ffffff" />
           : <Icon name="check" size={20} color="#ffffff" />
        }
        </Circle>
        <ItemContainer color={color === '#fbc37f' ? '#fbc37f':'#ffffff'}>
            {children}
        </ItemContainer>
    </Container>
  );
};
