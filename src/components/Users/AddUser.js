import React, { useRef, useState } from "react";
import styled from "styled-components"
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    // setEnteredUsername(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <StylyLab htmlFor="username">Username</StylyLab>
          <InputStyle
            id="username"
            type="text"
            // value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <StylyLab htmlFor="age">Age (Years)</StylyLab>
          <InputStyle
            id="age"
            type="number"
            // value={enteredAge}

            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;


const StylyLab = styled.label`
 display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;`

  const InputStyle=styled.input`
   font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  :focus {
  outline: none;
  border-color: #4f005f;
}`