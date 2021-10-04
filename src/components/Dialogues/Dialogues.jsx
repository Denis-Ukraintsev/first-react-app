import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import styled from "styled-components";

const Dialogues = (props) => {
  let dialoguesElements = props.state.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <DialoguesContainer>
      <div>{dialoguesElements}</div>
      <MessagesContainer>{messagesElements}</MessagesContainer>
    </DialoguesContainer>
  );
};

const DialoguesContainer = styled.div`
  color: rgb(23, 88, 104);
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

const MessagesContainer = styled.div`
  color: rgb(71, 22, 80);
`;

export default Dialogues;
