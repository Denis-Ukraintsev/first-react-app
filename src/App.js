import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import { Route } from 'react-router'

const App = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/Profile"
          render={() => (
            <Profile profilePage={state.profilePage} dispatch={dispatch} />
          )}
        />
        <Route
          path="/Dialogues"
          render={() => (
            <DialoguesContainer
              dialoguesPage={state.dialoguesPage}
              dispatch={dispatch}
            />
          )}
        />
        <Route path="/News" render={() => <News />} />
        <Route path="/Photos" render={() => <Photos />} />
      </div>
    </div>
  )
}
export default App
