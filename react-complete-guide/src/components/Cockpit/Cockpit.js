import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'

const Cockpick = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(()=> {
    console.log('[Cockpit.js] useEffect')
    setTimeout(()=>{
      toggleBtnRef.current.click();
    },1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);
  // With an empty Array, this useEffect will only run once on creation!!

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect more then once');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  })

  const assignedclasses = [];
  if(props.personsLength <= 2) {
    assignedclasses.push(classes.red);
  }
  if(props.personsLength <= 1) {
    assignedclasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h1 className={assignedclasses.join(' ')}>Hi there</h1>
      <button
        className={props.showPersons ? classes.buttonRed : classes.buttonGrenn}
        onClick={props.toggle}
        ref = {toggleBtnRef}
        >Show Persons
      </button>
      <button className="btn btn-ouline-dark"
        onClick={() => {props.add({
          id:props.personsLength + 1,
          name:'Susi',
          age:30
        })}}>
        Add Person
      </button>
    </div>
  )
};

export default React.memo(Cockpick);
