import React from 'react';
import classes from './Cockpit.module.css'

const cockpick = (props) => {

  const assignedclasses = [];
  if(props.persons.length <= 2) {
    assignedclasses.push(classes.red);
  }
  if(props.persons.length <= 1) {
    assignedclasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'am a React App</h1>
      <h1 className={assignedclasses.join(' ')}>Hi there</h1>
      <button className={props.showPersons ? classes.buttonRed : classes.button} onClick={props.toggle}
        >Show Persons</button>
    </div>
  )
};

export default cockpick;
