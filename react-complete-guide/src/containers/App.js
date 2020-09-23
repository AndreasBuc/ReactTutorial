import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Michale', age: 30},
      {id: 3, name: 'Marie', age: 28},
  ],
  showPersons: false,
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    // Alternative
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  };

  togglePersonsHandler= () => {
    this.setState({showPersons:!this.state.showPersons})
  };
// render ------------------------------------------------------------
  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          ></Persons>
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons = {this.state.showPersons}
          toggle = {this.togglePersonsHandler}
          >
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);
