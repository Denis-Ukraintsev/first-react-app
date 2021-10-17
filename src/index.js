import store from './components/redux/store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import state from './components/redux/state'
// import { addPost, updateNewPost } from './components/redux/state'
import { BrowserRouter } from 'react-router-dom'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)
