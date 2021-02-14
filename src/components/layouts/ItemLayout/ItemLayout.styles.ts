import styled from 'styled-components/native';


export const Container = styled.View`
flex-direction:row;
align-items:center;
margin:20px 0 0 20px;
`;

type ItemContainer = {
    color:string;
}

export const  ItemContainer = styled.View<ItemContainer>`
justify-content:center;
height:120px;
width:350px;
border:2px ${({color})=> color};
background-color:#ffffff;
z-index:0;
`;

type CircleProps ={
    color:string;
}

export const Circle = styled.View<CircleProps>`
    background-color:${({color})=>color};
    border-radius:30;
    width:60px;
    height:60px;
    border: 2.5px solid #eaf0f8;
    margin-right:-30px;
    z-index: 1;
    justify-content:center;
    align-items:center;
`; 