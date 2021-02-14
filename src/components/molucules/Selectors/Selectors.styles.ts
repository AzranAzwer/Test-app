import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction:row;
  margin:20px 20px 0 20px;
`;

export const IconSet = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;
type outterComponentProps= {
    color:string;
}
export const OutterComponent = styled.View<outterComponentProps>`
    background-color:${({color})=>color};
    border-radius:25;
    width:50px;
    height:50px;
    justify-content:center;
    align-items:center;
    border: 2.5px solid #eaf0f8;
`;

