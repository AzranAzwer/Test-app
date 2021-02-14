import React, {FC} from 'react';
import {Container} from './Home.styles';
import {Header,Heading,Selector} from '../../molucules';
import {ItemContainer} from '../../organisms'

export const Home: FC = () => {
  return (
    <Container>
      <Header/>
         <Heading 
          title="Design System"
          iconName="layer-group"
          fontSize="28px"
          margin="30px 0 0 20px"
        />
        <Selector />
           <Heading 
          title="Drop 2"
          iconName="calendar-check-o"
          fontSize="24px"
          date="Feb 22"
          margin="40px 0 0 20px"
        />
          <ItemContainer 
            toDo="pending"
            title="Refinement (Based on Feedback)"
            time=" -3 days left"
          />
           <ItemContainer
            toDo="next"
            title="FinalDesign Approval"
            time="Tomorrow" 
          />
          <ItemContainer 
            toDo="pending"
            title="Refinement (Based on Feedback)"
            time=" -3 days left"
          />
            <ItemContainer 
              toDo="done"
              title="Review #2: Dropdown"
              time="Today" 
            />
    </Container>
  );
};
