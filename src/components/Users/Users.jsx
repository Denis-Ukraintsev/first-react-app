import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { follow, unfollow } from '../../features/userSlice'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(({ usersPage }) => usersPage.users)
  const i18n = {
    follow: 'follow',
    unfollow: 'unfollow',
  }
  const handleFollowBtn = (id, followed) => {
    dispatch(followed ? unfollow(id) : follow(id))
  }
  return (
    <Root>
      {users.map(({ id, fullName, followed }) => (
        <User key={id}>
          {fullName}
          <Button
            onClick={() => {
              handleFollowBtn(id, followed)
            }}
          >
            {!followed ? i18n.follow : i18n.unfollow}
          </Button>
        </User>
      ))}
    </Root>
  )
}

const Root = styled.div``
const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
`
const Button = styled.button``

export default Users
