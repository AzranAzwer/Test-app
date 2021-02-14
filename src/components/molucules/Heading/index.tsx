import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../../atoms';
import {Container,TextContainer,IconContainer,TimeContainer} from './Heading.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

export interface HeadingProps {
  title:string;
  iconName?:string;
  fontSize:string;
  date?:string;
  itemIcon?:string
  margin?:string;
  status?:string;
}

export const Heading: FC<HeadingProps> = ({title,iconName='',fontSize,date='',itemIcon,margin = '0px',status}) => {
  return (
    <Container marginValue={margin}>
        <IconContainer>
          {iconName === 'calendar-check-o' ? 
          (<Icon name={iconName} size={20} color="#000080"/>): 
          (<Icons name={iconName} size={20} color="#000080"/>) 
          }
        </IconContainer>
        <TextContainer>
          <Text fontSize={fontSize} fontColor="#11355a" fontWeight={500} lineThrough={status==='done' ? "line-through":'none'}>
          {title}
        </Text>
        <TimeContainer>
          {itemIcon && 
            <Icons name={itemIcon} size={20} color="#cde0fa"/> 
          }
          <Text fontSize="14px" fontColor="#11355a">
          {date}
        </Text>
        </TimeContainer>
        
      </TextContainer>
    </Container>
  );
};
