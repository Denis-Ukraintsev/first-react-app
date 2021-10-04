import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DialogueItem = (props) => {
  let path = "/Dialogues/" + props.id;
  return (
    <DialogueItemContainer>
      <NavLink to={path} activeStyle={NameActive}>
        {props.avatar}
        {props.name}
      </NavLink>
    </DialogueItemContainer>
  );
};

const DialogueItemContainer = styled.div`
  padding: 5px;
  a {
    color: rgb(170, 111, 180);
    text-decoration: none;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
`;

const NameActive = {
  color: "brown"
};

export default DialogueItem;
