import React from 'react';
import classes from './Person.css'

// children any elements elements between opening and closing tag of component
const person = ( props ) => {

    const rnd = Math.random();
    if (rnd > .7) {
        throw new Error('something went wrong');
    }
    return (
        <div className={ classes.Person }>
            <p onClick={ props.click }>I'm {props.name} and I am { props.age } years old!</p>
            <p>{props.children}</p> 
            <input type="test" onChange={ props.changed } value={props.name}/>
        </div>)
}

export default person; 