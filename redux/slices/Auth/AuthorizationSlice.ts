import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PhotoType, UserT } from '../../../types'

/**
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */

const initialState: {
  users: UserT[]
} = {
  users: [],
}

export const getUser = createAsyncThunk<UserT[]>(
  'photos/GET',
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const response = await fetch('/api/auth')
      if (response.ok) {
        return response.json()
      }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const AuthorizationSlice = createSlice({
  name: 'Authorization',
  initialState,
  reducers: {
    auth: (state, action) => {},
  },
  extraReducers(builder) {
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<UserT[]>) => {
      state.users = action.payload
    })
  },
})
