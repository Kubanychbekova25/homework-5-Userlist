import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.map((item) => (
        <StyledLi key={item.id}>
          {item.name} {item.age} year
        </StyledLi>
      ))}
    </Card>
  );
};

export default UsersList;

const StyledLi = styled.li`
  list-style: none;
  font-size: 1.3rem;
  list-style: none;
`;
