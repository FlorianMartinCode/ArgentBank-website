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
      setFirstName: (state, action) => {
        state.firstName = action.payload
      },
      setLastName: (state, action) => {
        state.lastName = action.payload
      },
      setUserName: (state, action) => {
        state.userName = action.payload
      }
}});

export const {
  setFirstName,
  setLastName,
  setUserName
} = userSlice.actions

export default userSlice.reducer
