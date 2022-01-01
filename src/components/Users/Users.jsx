import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { follow, fetchUsers } from '../../features/userSlice'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(({ usersPage }) => usersPage.users)
  const i18n = {
    follow: 'follow',
    unfollow: 'unfollow',
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const handleFollowBtn = (id) => {
    dispatch(follow(id))
  }

  return (
    <Root>
      {users.map(({ id, name, followed }) => (
        <User key={id}>
          {name}
          <Button
            onClick={() => {
              handleFollowBtn(id)
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
