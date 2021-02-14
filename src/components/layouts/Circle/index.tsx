import React, { FC } from 'react';
import { CircleContainer } from './Circle.styles';
import Icon from 'react-native-vector-icons/FontAwesome'

export interface CircleProps {
    color?:string;
    size?:string;
}

export const Circle: FC<CircleProps>= ({ children, color ="#9cadcc",size ="60px"}) => {
  return (
        <CircleContainer color={color} size={size}>
           {children}
        </CircleContainer>
  );
};
