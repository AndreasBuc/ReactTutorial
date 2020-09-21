import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 20px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    }
    @media (min-width: 600px) {
          width: 450px;
    }
    `;

const person = (props) => {

  // const style = {
  //   '@media (min-width: 600px)': {
  //     width: '450px'
  //   }
  // };

  return (
    // <div className="Person" style={style}>

      <StyledDiv><p onClick={props.click}>
          My name is {props.name}. I am {props.age} years old!</p>
        <input type="text" value={props.name} onChange={props.changed}/>
      </StyledDiv>

  )
}

export default person;
