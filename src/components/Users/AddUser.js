import React from 'react';
import Card from './Card';
import classes from './AddUser.module.css'
import Button from './Button';
import { useState } from 'react';
import ErrorModal from './ErrorModal';
const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge]= useState('');
    const [error, setError]= useState();

const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value)
}

const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
}

const addUserHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
        setError({
            title:'Invalid input',
            message:'Please enter a valid Name and age'
        });
        return;
    }
    if(+enteredAge<1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid  age'
        });
        return;
    }
   props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
};

const errorHandler = ()=>{
    setError(null);
}

return(
    <div>
   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
<form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>

    <label htmlFor="age">Age(Years)</label>
    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>

    <Button type="submit">Add User</Button>

    
</form>
</Card>
</div>
)
};
export default AddUser;