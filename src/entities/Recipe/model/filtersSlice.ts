import { RootState } from "../../../app/lib"
import { getDefaultValue } from "../../../shared/lib/utils"
import { TRecipe } from "../lib/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type TFilters = Pick<TRecipe, "title" | "ingredients">

type DropFiltersPayload = Partial<{
  [key in keyof TFilters]: boolean
}>

const initialState: TFilters = {
  title: "",
  ingredients: [],
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    appendFilters: (state, action: PayloadAction<Partial<TFilters>>) => {
      const anyFilterProvided = Object.values(action.payload).filter((v) => v).length > 0

      if (anyFilterProvided) {
        for (const key in action.payload) {
          const property = key as keyof TFilters

          state[property] = action.payload[property]
        }
      }
    },

    dropFilters: (state, action: PayloadAction<DropFiltersPayload>) => {
      const anyFilterProvided = Object.values(action.payload).filter((v) => v).length > 0

      const keys = anyFilterProvided ? action.payload : state

      for (const key in keys) {
        const property = key as keyof TFilters

        state[property] = getDefaultValue<(typeof state)[typeof property]>()
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
