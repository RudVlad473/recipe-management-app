import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/lib"
import { anyValueFull, getDefaultValue } from "../../../shared/lib/utils"
import { TRecipe } from "../lib/types"

export type TFilters = Pick<TRecipe, "title" | "ingredients" | "cookingTimeMin">

type DropFiltersPayload = Partial<{
  [key in keyof TFilters]: boolean
}>

const initialState: TFilters = {
  title: "",
  ingredients: [],
  cookingTimeMin: 0,
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    appendFilters: (state, action: PayloadAction<Partial<TFilters>>) => {
      const anyFilterProvided = anyValueFull(action.payload)

      if (anyFilterProvided) {
        for (const key in action.payload) {
          state[key] = action.payload[key]
        }
      }
    },

    dropFilters: (state, action: PayloadAction<DropFiltersPayload>) => {
      const anyFilterProvided = anyValueFull(action.payload)

      const keys = anyFilterProvided ? action.payload : state

      for (const key in keys) {
        state[key] = getDefaultValue(state[key])
      }
    },
  },
})

export const { dropFilters, appendFilters } = filtersSlice.actions
export const { reducer: filtersReducer } = filtersSlice

export const selectFilters = (state: RootState) => {
  const anyFilters = Object.values(state.filters).filter((v) => v).length > 0

  return anyFilters ? state.filters : undefined
}
