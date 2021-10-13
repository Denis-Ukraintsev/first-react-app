import state, { subscribe } from './components/redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import state from './components/redux/state'
import { addPost, updateNewPost } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)
