import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { follow, unfollow } from '../../features/userSlice'

const Users = () => {
  const dispatch = useDispatch()

  return (
    <Root>
      <Button></Button>
    </Root>
  )
}

const Root = styled.div``
const Button = styled.div``

export default Users
