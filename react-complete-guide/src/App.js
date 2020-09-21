import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

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

    // const person = Object.assign({}, this.state.persons[personIndex]);

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
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
         <h1>Hi, I'am a React App</h1>
         <h1 className={classes.join(' ')}>Hi there</h1>
         {/*Arrow functions can be inefficient*/}
         <button className={this.state.showPersons ? 'buttonRed' : 'button'} onClick={this.togglePersonsHandler}
           >Show Persons</button>
         {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);
