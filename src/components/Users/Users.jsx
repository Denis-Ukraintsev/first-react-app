import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  follow,
  fetchUsers,
  setCurrentPage,
} from '../../redux/features/usersSlice'
import InfiniteScroll from 'react-infinite-scroll-component'
import spinner from '../../assets/spinner.gif'
import UserAva from './UserAva'
import { NavLink } from 'react-router-dom'

const Users = () => {
  const dispatch = useDispatch()
  const { users, currentPage } = useSelector(({ usersPage }) => usersPage)

  const i18n = {
    follow: 'follow',
    unfollow: 'unfollow',
  }

  useEffect(() => {
    dispatch(fetchUsers({ pageNumber: currentPage }))
  }, [dispatch, currentPage])

  const handleFollowBtn = (id) => {
    dispatch(follow(id))
  }

  const usersArray = users.map((user) => (
    <User key={user.id}>
      <UserAvaContainer>
        <NavLink to="/Profile">
          <UserAva avaAddress={user.photos?.small} />
        </NavLink>
      </UserAvaContainer>
      <UserName>{user.name}</UserName>
      <Button
        onClick={() => {
          handleFollowBtn(user.id)
        }}
      >
        {!user.followed ? i18n.follow : i18n.unfollow}
      </Button>
    </User>
  ))

  const fetchData = () => {
    dispatch(setCurrentPage(currentPage + 1))
  }

  return (
    <Root id="scrollContent">
      <InfiniteScroll
        dataLength={usersArray.length}
        next={fetchData}
        hasMore={true}
        loader={<Spinner src={spinner} alt="spinner" />}
        scrollableTarget="scrollContent"
        scrollThreshold={0.9}
      >
        {usersArray}
      </InfiniteScroll>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 0 0 50px;
  margin: 2px;
`
const UserAvaContainer = styled.div`
  display: flex;
  align-self: center;
  &:hover {
    transform: scale(1.2);
  }
`

const UserName = styled.div`
  display: flex;
  color: rgb(71, 22, 80);
  padding: 5px;
  align-self: center;
`

const Button = styled.button`
  border-radius: 50px;
  width: 100px;
  &:hover {
    color: green;
  }
  &:active {
    color: brown;
  }
`
const Spinner = styled.img`
  width: 130px;
  height: 100px;
`

export default Users
