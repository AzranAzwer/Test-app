import React from 'react';
import {TextAlignHorizontal} from '../../../types';
import {TextElement} from './Text.styles';

export interface TextProps {
  children: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  margin?: string;
  align?: TextAlignHorizontal;
  lineHeight?: string;
  lineThrough?:string;
}

export const Text: React.FC<TextProps> = ({
  children = 'Text',
  fontSize = '1px',
  fontColor = '#000000',
  fontWeight = 400,
  align,
  margin,
  lineHeight,
  lineThrough,
}) => {
  return (
    <TextElement
      testID="myText"
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      alignValue={align}
      marginValue={margin}
      lineHeight={lineHeight}
      line={lineThrough}
      >
      {children}
    </TextElement>
  );
};
