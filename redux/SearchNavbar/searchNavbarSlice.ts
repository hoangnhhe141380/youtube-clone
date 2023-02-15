import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "../store"

export interface SearchState {
  query: string
}

const initialState: SearchState = {
  query: ""
}

export const searchNavbarSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
  }
})

export const { setQuery } = searchNavbarSlice.actions
export const getSearchQuery = (state: AppState) => state.searchNavbar.query
export default searchNavbarSlice.reducer
