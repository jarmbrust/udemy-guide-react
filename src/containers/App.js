import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // classes have properities
  // state is only available in classes from Components
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons 
          persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }
        />;
    }

    return (
      <div className={ classes.App }>
       <Cockpit 
        appTitle={ this.props.title }
        showPersons={ this.state.showPersons }
        persons={ this.state.persons }
        clicked={ this.togglePersonsHandler }
       />
        {persons}
      </div>
    );
  }
}

export default App;
