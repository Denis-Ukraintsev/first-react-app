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

const App = () => {
  let posts = [
    { id: 1, message: 'Hi, how are You?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 20 },
    { id: 3, message: 'Wow, amazing site', likeCount: 21 },
  ]
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Profile" render={() => <Profile posts={posts} />} />
          <Route path="/Dialogues" render={() => <Dialogues />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Photos" render={() => <Photos />} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
