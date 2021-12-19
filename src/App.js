import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Users from './components/Users/Users'
import { Route } from 'react-router'
import './App.css'
import styled from 'styled-components'

const App = () => {
  return (
    <Root>
      <Header />
      <NavbarWrapper>
        <Navbar />
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/Dialogues" render={() => <Dialogues />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Photos" render={() => <Photos />} />
        <Route path="/Users" render={() => <Users />} />
      </NavbarWrapper>
    </Root>
  )
}
const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const NavbarWrapper = styled.div`
  display: flex;
`
export default App
