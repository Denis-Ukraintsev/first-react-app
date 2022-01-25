import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Users from './components/Users/Users'
import LoginModal from './components/LoginModal/LoginModal'
import { Route } from 'react-router'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { authMe } from './redux/features/authSlice'
import spinner from './assets/spinner.gif'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  const { isShowLoginModal, isInitialized } = useSelector(({ auth }) => auth)

  if (!isInitialized) {
    return (
      <SpinnerContainer>
        <Spinner src={spinner} alt="spinner" />
      </SpinnerContainer>
    )
  }

  return (
    <Root>
      <Header />
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Dialogues">
            <Dialogues />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Photos">
            <Photos />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
        </ContentWrapper>
      </AppWrapper>
      {isShowLoginModal && <LoginModal />}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const AppWrapper = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`
const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Spinner = styled.img`
  width: 130px;
  height: 100px;
`

export default App
