// import {applyMiddleware, compose} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = configureStore({
  reducer: rootReducer
})

export default store
