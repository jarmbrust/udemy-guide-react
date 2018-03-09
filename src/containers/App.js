import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('app.js -- inside constructor', props);
  }

  componentWillMount() {
    console.log('app.js -- inside componentWillMount()');
  }

  componentDidMount() {
    console.log('app.js -- inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE app.js inside component shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('UPDATE app.js inside component componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate () {
      console.log('UPDATE app.js inside component componentDidUpdate()');
  } 

  state = {
    persons: [
      { id: 'dfsg', name: 'James', age: 44 },
      { id: '234', name: 'Lacey', age: 37 },
      { id: 'erfd', name: 'Brian', age: 46 }
    ]
  }

  deletePersonHandler = (personIndex) => {
  //  const persons = this.state.persons.slice();  //copies array and stores a new one
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    console.log('app.js -- inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
          persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }
        />;
    }

    return (
      <WithClass classes={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
       <Cockpit 
        appTitle={ this.props.title }
        showPersons={ this.state.showPersons }
        persons={ this.state.persons }
        clicked={ this.togglePersonsHandler }
       />
        {persons}
      </WithClass>
    );
  }
}

export default App;
