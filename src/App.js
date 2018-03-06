import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click={ () => this.deletePersonHandler(index) }
              name={ person.name } 
              age={ person.age }
              key={ person.id }
              changed = { (event) => this.nameChangedHandler(event, person.id) } />
          }) }
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={ classes.App }>
        <h1>Hi I am a react app</h1>
        <p className={ assignedClasses.join(' ') } >This is working.</p>
        <button 
          className={ btnClass }
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
