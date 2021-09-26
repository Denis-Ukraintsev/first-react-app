import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route
            path="/Dialogues"
            render={() => <Dialogues state={props.state.dialoguesPage} />}
          />
          <Route path="/News" render={() => <News />} />
          <Route path="/Photos" render={() => <Photos />} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
