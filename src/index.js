import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let posts = [
  { id: 1, message: 'Hi, how are You?', likeCount: 15 },
  { id: 2, message: "It's my first post", likeCount: 20 },
  { id: 3, message: 'Wow, amazing site', likeCount: 21 },
]

let dialogues = [
  { id: 1, name: 'Denis' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Lutsius' },
  { id: 4, name: 'Pasha' },
]

let messages = [
  { id: 1, message: "Hi, I've created this site" },
  { id: 2, message: 'Hello, I am a photographer' },
  { id: 3, message: 'Meow, I am a cat rock climber' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogues={dialogues} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
)
