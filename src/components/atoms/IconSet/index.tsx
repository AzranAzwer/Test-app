import React,{FC} from 'react';
import {Container,OutterComponent} from './IconSet.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/FontAwesome5'
import {Text} from '../../atoms'

interface IconSetProps {
    color:string;
    iconName:string;
    text:string;
}

export const IconSet: FC<IconSetProps>=({ color,iconName,text})=>{
    return(
        <Container>
                <OutterComponent color={color}>
                    {iconName ==="chart-bar" ? <Icons name="chart-bar" size={20} color="#000080" />
                :    <Icon name={iconName} size={20} color="#000080" />
                } 
                </OutterComponent>
                <Text fontSize="14px" fontColor="#70a4fe" fontWeight={500} margin="8px 0 0 0">
                    {text}
                </Text>
        </Container>)
}