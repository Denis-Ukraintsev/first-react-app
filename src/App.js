import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Users from './components/Users/Users'
import { Route } from 'react-router'
import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/Dialogues" render={() => <DialoguesContainer />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Photos" render={() => <Photos />} />
        <Route path="/Users" render={() => <Users />} />
      </div>
    </div>
  )
}
export default App
