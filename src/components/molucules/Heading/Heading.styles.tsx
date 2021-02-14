import styled from 'styled-components/native';

type ContainerProps = {
  marginValue?:string;
};

export const Container = styled.View<ContainerProps>`
  flex-direction:row;
  margin:${({marginValue})=>marginValue};
`;

export const TextContainer = styled.View`
 flex-direction:column;
 margin:0 0 0 20px;
`;

export const IconContainer = styled.View`
margin-top: 6px;
`;

export const TimeContainer = styled.View`
  flex-direction:row;
`;
