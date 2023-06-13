import { RootState } from "../../../app/lib"
import { TUser } from "../lib/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: TUser = {
  password: "",
  username: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TUser>) => {
      const { username, password } = action.payload

      state.password = password
      state.username = username
    },

    dropCredentials: (state) => {
      state.password = state.username = ""
    },
  },
})

export const { dropCredentials, setCredentials } = authSlice.actions
export const { reducer: authReducer } = authSlice

export const selectCredentials = (state: RootState): TUser => {
  return state.auth
}

export const selectIsLoggedIn = ({ auth }: RootState): boolean => {
  const isLoggedIn = !!(auth.password && auth.username)

  return isLoggedIn
}
