import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogues from './components/Dialogues/Dialogues'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import { Route } from 'react-router'
import { addPost } from './components/redux/state'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/Profile"
          render={() => (
            <Profile state={props.state.profilePage} addPost={props.addPost} />
          )}
        />
        <Route
          path="/Dialogues"
          render={() => <Dialogues state={props.state.dialoguesPage} />}
        />
        <Route path="/News" render={() => <News />} />
        <Route path="/Photos" render={() => <Photos />} />
      </div>
    </div>
  )
}
export default App
