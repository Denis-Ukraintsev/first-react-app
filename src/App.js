import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Users from './components/Users/Users'
import LoginModal from './components/LoginModal/LoginModal'
import ErrorAlert from './components/LoginModal/ErrorAlert'
import { Route } from 'react-router'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { authMe } from './redux/features/authSlice'
import Spinner from './components/sharedComponents/Spinner'
import { ROUTES } from 'src/helpers/navHelper'

const App = () => {
  const { isShowLoginModal, isInitialized, isShowSharedError } = useSelector(
    ({ auth, shared }) => ({
      isShowLoginModal: auth.isShowLoginModal,
      isInitialized: auth.isInitialized,
      isShowSharedError: shared.isShowSharedError,
    })
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authMe())
  }, [dispatch])

  if (!isInitialized) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  return (
    <Root>
      <Header />
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <Route path={ROUTES.PROFILE}>
            <Profile />
          </Route>
          <Route path={ROUTES.USER_PROFILE}>
            <Profile />
          </Route>
          <Route path={ROUTES.DIALOGUES}>
            <Dialogues />
          </Route>
          <Route path={ROUTES.NEWS}>
            <News />
          </Route>
          <Route path={ROUTES.PHOTOS}>
            <Photos />
          </Route>
          <Route path={ROUTES.USERS}>
            <Users />
          </Route>
        </ContentWrapper>
      </AppWrapper>
      {isShowLoginModal && <LoginModal />}
      {isShowSharedError && <ErrorAlert />}
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

export default App
