import React, { Component } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
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
              ref={this.inputElementRef}
              value={this.props.name}
              onChange={this.props.changed}/>
          </div>
        </div>

    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
