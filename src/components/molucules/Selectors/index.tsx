import React,{FC} from 'react';
import {IconSet} from '../../atoms'
import {Container} from './Selectors.styles'

export const Selector:FC =()=>{
    return(
        <Container>
            <IconSet
                color="#ffffff"
                iconName="calendar"
                text="Calender"
            />
            <IconSet
                color="#70a4fe"
                iconName="calendar-check-o"
                text="Daily"
            />
             <IconSet
                color="#ffffff"
                iconName="list-ul"
                text="List"
            />
              <IconSet
                color="#ffffff"
                iconName="chart-bar"
                text="Grantt"
            />
        </Container>
    )
}