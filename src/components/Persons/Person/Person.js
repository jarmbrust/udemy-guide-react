import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
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
        if (this.props.position === 0) { this.inputElement.focus(); }
    }

    render () {
        console.log('person.js -- inside render()');
        return (
            <Auxiliary>
                <p onClick={ this.props.click }>I'm { this.props.name} and I am { this.props.age } years old!</p>
                <p>{ this.props.children }</p> 
                <input 
                    ref={(inpt) => { this.inputElement = inpt }}
                    type="test" 
                    onChange={ this.props.changed } 
                    value={ this.props.name }/>
            </Auxiliary>);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person); 