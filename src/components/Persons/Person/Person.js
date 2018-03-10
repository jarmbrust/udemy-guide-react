import React, { Component } from 'react';
import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('person.js -- inside constructor', props);
    }

    componentWillMount() {
        console.log('person.js -- inside componentWillMount()');
    }

    componentDidMount() {
        console.log('person.js -- inside componentDidMount()');
    }

    render () {
        console.log('person.js -- inside render()');
        return (
            <Auxiliary>
                <p onClick={ this.props.click }>I'm { this.props.name} and I am { this.props.age } years old!</p>
                <p>{ this.props.children }</p> 
                <input type="test" onChange={ this.props.changed } value={ this.props.name }/>
            </Auxiliary>);
    }
}

export default withClass(Person, classes.Person); 