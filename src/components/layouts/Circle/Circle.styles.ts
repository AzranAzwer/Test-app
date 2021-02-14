import styled from 'styled-components/native';
import {CircleProps} from './index'

export const CircleContainer = styled.View<CircleProps>`
    background-color:${({color})=>color};
    border-radius:30;
    width:${({size})=> size};
    height:${({size})=> size};
    border: 2.5px solid #eaf0f8;
    margin-right:-30px;
    z-index: 1;
    justify-content:center;
    align-items:center;
`; 