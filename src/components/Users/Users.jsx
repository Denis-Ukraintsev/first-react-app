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

  const usersArray = users.map(({ id, name, followed }) => (
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
  width: 200px;
  height: 100px;
`
const Button = styled.button`
  border-radius: 5px;
  &:active {
    color: brown;
  }
`
const Spinner = styled.img`
  width: 130px;
  height: 100px;
`

export default Users
