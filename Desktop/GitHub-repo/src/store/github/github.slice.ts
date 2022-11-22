import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk'

// Описываем тип хука. В данном случае массив строк
interface GitHubState{
  favoutites: string[] 
}

const initialState: GitHubState = {
  favoutites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

// Метод слайса используемого при помощи редакс тулкит, 
// позволяющий добавить функционал

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers:{
    addFavourite(state, action: PayloadAction<string>){
      state.favoutites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favoutites))
    },
    removeFavourite(state, action: PayloadAction<string>){
      state.favoutites = state.favoutites.filter(f => f !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favoutites))
    }
  }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer