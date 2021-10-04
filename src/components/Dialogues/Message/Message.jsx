import React from "react";
import styled from "styled-components";

const Message = (props) => {
  return (
    <MessageContainer>
      <MessageContainerLi> {props.message} </MessageContainerLi>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  padding: 8px;
  margin: 7px;
`;

const MessageContainerLi = styled.li`
  display: list-item;
  list-style-type: circle;
`;

export default Message;
