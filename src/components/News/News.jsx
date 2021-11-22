import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const News = (props) => {
  return (
    <Root>
      <NavLink to="#">News</NavLink>
    </Root>
  )
}

const Root = styled.div`
  a {
    text-decoration: none;
    color: rgb(71, 22, 80);
  }
`
export default News
