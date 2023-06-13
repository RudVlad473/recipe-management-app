import { useAppSelector } from "../../../../app/lib"
import { TFilters, selectFilters } from "../../model/filtersSlice"
import recipes from "../data/recipes.json"
import { TRecipe } from "../types"
import { useMemo } from "react"

const recipeFilter: Partial<Record<keyof TRecipe, (recipe: TRecipe, payload: any) => boolean>> = {
  title: ({ title }, partialTitle: string) =>
    title.toLowerCase().includes(partialTitle.toLowerCase()),
  ingredients: ({ ingredients }, payloadIngredients: string[]) =>
    payloadIngredients.every((ingredient) => ingredients.includes(ingredient)),
  cookingTimeMin: ({ cookingTimeMin }, payloadTime: number) => cookingTimeMin === payloadTime,
}

export function useFilteredRecipes() {
  const filters = useAppSelector(selectFilters)

  const finalRecipes = useMemo(() => {
    const anyFilterProvided = Object.values(filters).filter((v) => v).length > 0

    if (!filters || !anyFilterProvided) {
      return recipes
    }

    let filteredRecipes: TRecipe[] = recipes

    for (const key in filters) {
      const filterName = key as keyof TFilters

      const filterCallback = recipeFilter[filterName]
      const filterPayload = filters[filterName]

      if (!filterCallback || !filterPayload) {
        continue
      }

      filteredRecipes = filteredRecipes.filter((recipe) => filterCallback(recipe, filterPayload))
    }

    return filteredRecipes
  }, [filters])

  return {
    recipes: finalRecipes,
  }
}
