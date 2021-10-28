import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialoguesReducer from './dialogues-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
})

const store = createStore(reducers)

export default store
