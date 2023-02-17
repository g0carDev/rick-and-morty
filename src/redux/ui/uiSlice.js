import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    }
  }
})

export const { toggleSideMenu } = uiSlice.actions
export default uiSlice.reducer
