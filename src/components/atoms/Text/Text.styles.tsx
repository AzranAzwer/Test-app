import styled from 'styled-components/native';
import {TextAlignHorizontal} from '../../../types';

export interface TextElementProps {
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  marginValue?: string;
  alignValue?: TextAlignHorizontal;
  lineHeight?: string;
  line?:string;
}

export const TextElement = styled.Text<TextElementProps>`
  font-size: ${({fontSize}) => fontSize};
  color: ${({fontColor}) => fontColor};
  font-weight: ${({fontWeight}) => fontWeight};
  ${({alignValue}) => alignValue && `text-align: ${alignValue}`};
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
  text-decoration : ${({line})=>line|| 'none'}
`;
