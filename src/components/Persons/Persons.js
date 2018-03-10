import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('persons.js -- inside constructor', props);
    }

    componentWillMount() {
        console.log('persons.js -- inside componentWillMount()');
    }

    componentDidMount() {
        console.log('persons.js -- inside componentDidMount()');
    }

    componentWillReceiveProps (nextProps) {
        console.log('UPDATE persons.js inside component componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('UPDATE persons.js inside component shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('UPDATE persons.js inside component componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('UPDATE persons.js inside component componentDidUpdate()');
    } 

    render () {
        console.log('persons.js -- inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={ () => this.props.clicked(index) }
                name={ person.name } 
                position= { index }
                age={ person.age }
                key={ person.id }
                changed = { (event) => this.props.changed(event, person.id) } />
            });
    }
}

export default Persons;