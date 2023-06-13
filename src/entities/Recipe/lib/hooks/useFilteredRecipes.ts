import { useAppSelector } from "../../../../app/lib"
import { TFilters, selectFilters } from "../../model/filtersSlice"
import recipes from "../data/recipes.json"
import { TRecipe } from "../types"
import { useMemo } from "react"

const recipeFilter: Partial<Record<keyof TRecipe, (recipe: TRecipe, payload: any) => boolean>> = {
  title: ({ title }, payload: string) => title.toLowerCase().includes(payload.toLowerCase()),
  ingredients: ({ ingredients }, payload: string[]) =>
    payload.every((ingredient) => ingredients.includes(ingredient)),
}

export function useFilteredRecipes() {
  const filters = useAppSelector(selectFilters)

  const finalRecipes = useMemo(() => {
    if (!filters) {
      return recipes
    }

    let filteredRecipes: TRecipe[] = recipes

    for (const key in filters) {
      const filterName = key as keyof TFilters

      const filterCallback = recipeFilter[filterName]

      if (!filterCallback) {
        continue
      }

      const filterPayload = filters[filterName]

      filteredRecipes = recipes.filter((recipe) => filterCallback(recipe, filterPayload))
    }

    return filteredRecipes
  }, [filters])

  return {
    recipes: finalRecipes,
  }
}
