import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/Dialogs" component={Dialogs} />
          <Route path="/Profile" component={Profile} />
          <Route path="/News" component={News} />
          <Route path="/Photos" component={Photos} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
