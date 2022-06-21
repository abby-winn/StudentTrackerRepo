import React from 'react';
import './AddUser.css';
import Card from '../ui/Card.js';
const AddUser = props => {

    function addUserHandler(event) {
        event.preventDefault();
    }

    return (

        <card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"></input>
                <button type="submit">Add User</button>
            </form>
        </card>
    );
};
export default AddUser;
