import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return null;
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...');
    return (
      this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
      })
    )
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

};

export default Persons;
