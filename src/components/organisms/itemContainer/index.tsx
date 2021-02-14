import React, { FC } from 'react';
import { Circle, ItemLayout } from  '../../layouts';
import {Text} from '../../atoms';
import {Heading} from '../../molucules';
import {ActionContainer,NameContainer,FooterContainer} from './itemContainer.styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';


export interface ItemContainerProps {
 toDo: string;
 title: string;
 time: string;
}

export const ItemContainer: FC<ItemContainerProps> = ({ toDo,title,time }) => {
  return (
    <ItemLayout color={toDo === 'next'?'#fbc37f' : "#9cadcc" }status={toDo}>
    <Heading 
    title={title}
    fontSize="18px"
    date={time}
    itemIcon="clock"
    margin ="10px 10px 0px 20px"
    status={toDo}
    />
    <FooterContainer>
    <ActionContainer>
        <Icons name='comment' size={20} color="#cde0fa"/>
        <Icons name='tasks' size={20} color="#cde0fa"/>
        <Icons name='star' size={20} color="#cde0fa"/>
    </ActionContainer>
    <NameContainer>
    <Circle color="#b89dfd" size="30px">
        <Text fontSize="14px" fontColor="#9e6ce3" fontWeight={500} >
            R
        </Text>
    </Circle>
    <Circle color="#fcb0be" size="30px">
        <Text fontSize="14px" fontColor="#f45471" fontWeight={500} >
            Y
        </Text>
    </Circle>
    </NameContainer>
    </FooterContainer>
    </ItemLayout>
  );
};
