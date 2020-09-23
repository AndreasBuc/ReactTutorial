import React from 'react';
import classes from './Person.module.css';

const person = (props) => {

  // const style = {
  //   '@media (min-width: 600px)': {
  //     width: '450px'
  //   }
  // };

  // const rnd = Math.random();
  // if(rnd > 0.7) {
  //   throw new Error('Something went wrong')
  // }

  return (

      <div className={classes.Person}><p onClick={props.click}>
        My name is {props.name}. I am {props.age} years old!</p>
        <div className="d-flex justify-content-center">
          <input className="form-control" type="text" value={props.name} onChange={props.changed}/>
        </div>
      </div>

  )
}

export default person;
