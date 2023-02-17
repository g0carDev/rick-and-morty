import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    character: {},
    favorites: JSON.parse(localStorage.getItem('favoriteCharacters')) || [],
    pagination: {},
    isLoading: false
  },
  reducers: {
    getCharactersFetch: (state) => {
      state.isLoading = true
    },
    getCharactersSuccess: (state, action) => {
      state.characters = action.payload.results
      state.pagination = action.payload.info
      state.isLoading = false
    },
    getCharacterSuccess: (state, action) => {
      state.character = action.payload
      state.isLoading = false
    },
    getCharactersFailure: (state) => {
      state.isLoading = false
    },
    getFavoriteCharacters: (state, action) => {
      state.favorites = action.payload
    },
    addFavoriteCharacter: (state, action) => {
      const characterId = action.payload.id
      const isFavorite = state.favorites.some((favorite) => favorite.id === characterId)

      if (!isFavorite) state.favorites.push(action.payload)
      else state.favorites = state.favorites.filter((favorite) => favorite.id !== characterId)

      localStorage.setItem('favoriteCharacters', JSON.stringify(state.favorites))
    }
  }
})

export const {
  getCharactersFetch,
  getCharacterFetch,
  getCharactersSuccess,
  getCharacterSuccess,
  getCharactersFailure,
  getFavoriteCharacters,
  addFavoriteCharacter
} = charactersSlice.actions

export default charactersSlice.reducer
