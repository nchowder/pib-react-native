/**
 * Reducer for auth interactions
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  password: null,
  loggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetState: () => initialState
  }
})

export const {resetState} = authSlice.actions
export default authSlice.reducer
