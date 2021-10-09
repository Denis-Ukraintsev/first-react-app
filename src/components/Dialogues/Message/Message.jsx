import React from 'react'
import styled from 'styled-components'

const Message = (props) => {
  return (
    <MessageContainer>
      <li> {props.message} </li>
    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  padding: 8px;
  margin: 7px;
  li {
    display: list-item;
    list-style-type: circle;
  }
`

export default Message
