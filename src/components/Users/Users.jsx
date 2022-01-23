import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { follow, fetchUsers } from '../../redux/features/usersSlice'

const Users = () => {
  const dispatch = useDispatch()
  const { users, pageSize, totalUsersCount, currentPage } = useSelector(
    ({ usersPage }) => usersPage
  )

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

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <Root>
      {pages.map((p) => {
        if (currentPage === p) {
          return <SpanSelected>{p}</SpanSelected>
        } else {
          return <Span>{p}</Span>
        }
      })}

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
const Button = styled.button`
  border-radius: 5px;
  &:active {
    color: brown;
  }
`
const Span = styled.span`
  margin: 5px;
  &:active {
    color: brown;
  }
`
const SpanSelected = styled.span`
  font-weight: bold;
  color: brown;
`

export default Users
