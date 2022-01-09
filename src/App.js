import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Users from './components/Users/Users'
import LoginModal from './components/LoginModal'
import { Route } from 'react-router'
import './App.css'
import styled from 'styled-components'

const App = () => {
  const isShowLoginModal = false
  return (
    <Root>
      <Header />
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Dialogues" render={() => <Dialogues />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Photos" render={() => <Photos />} />
          <Route path="/Users" render={() => <Users />} />
          <Route path="/LoginModal" render={() => <LoginModal />} />
        </ContentWrapper>
      </AppWrapper>
      {isShowLoginModal && (
        <LoginModalWrapper>
          <LoginModal />
        </LoginModalWrapper>
      )}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const LoginModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
`
// const LoginModal = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   height: 350px;
//   background-color: #fff;
//   border-radius: 15px;
// `
const AppWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
`
const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
`
export default App
