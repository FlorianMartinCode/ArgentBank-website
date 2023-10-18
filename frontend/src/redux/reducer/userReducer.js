import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: null,
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setFirstName: (state, {payload}) => {
        state.firstName = payload
      },
      setLastName: (state, {payload}) => {
        state.lastName = payload
      },
      setUserName: (state, {payload}) => {
        state.userName = payload
      }
}});

export const {
  setFirstName,
  setLastName,
  setUserName
} = userSlice.actions

export default userSlice.reducer