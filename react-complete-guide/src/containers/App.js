import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super (props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Michale', age: 30},
      {id: 3, name: 'Marie', age: 28},
      {id: 4, name: 'Tom', age: 34},
  ],
  showPersons: false,
  showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props);
    return state
  }

  addNewPerson = (person) => {
    const persons = this.state.persons.slice();
    persons.push(person);
    this.setState({persons: persons});
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
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  };

  togglePersonsHandler= () => {
    this.setState({showPersons:!this.state.showPersons})
  };
// render ------------------------------------------------------------
  render() {
    console.log('[App.js] render');
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
    let cockpit = null;
    if(this.state.showCockpit) {
      cockpit = (
        <Cockpit
          personsLength={this.state.persons.length}
          showPersons = {this.state.showPersons}
          toggle = {this.togglePersonsHandler}
          title= {this.props.appTitle}
          add = { this.addNewPerson }
          >
        </Cockpit>
      )
    }
    let button = (
      <button
        className="btn btn-outline-dark mt-2"
        onClick={
          () => this.setState({showCockpit: !this.state.showCockpit})
        }
        >
        Toogle Cockpit
      </button>
    )

    return (
      <div className='App'>
        {button}
        {cockpit}
        {persons}
      </div>
    );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

}

export default App;
// export default Radium(App);
