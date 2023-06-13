import { RootState } from "../../../app/lib"
import { TRecipe } from "../lib/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TRecipeId = Pick<TRecipe, "id">

const initialState: TRecipeId[] = []

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<TRecipeId>) => {
      const isAlreadyAdded = state.some(({ id }) => id === action.payload.id)

      if (!isAlreadyAdded) {
        state.push(action.payload)
      }
    },

    removeRecipe: (state, action: PayloadAction<TRecipeId>) => {
      state = state.filter(({ id }) => id === action.payload.id)
    },
  },
})

export const { addRecipe, removeRecipe } = recipeSlice.actions
export const { reducer: recipeReducer } = recipeSlice

export const selectRecipes = (state: RootState) => {
  return state.recipes
}
