import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            My name is {this.props.name}. I am {this.props.age} years old!
          </p>
          <div className="d-flex justify-content-center">
            <input
              className="form-control" 
              type="text"
              value={this.props.name}
              onChange={this.props.changed}/>
          </div>
        </div>

    )
  }
}

export default Person;
