import recipes from "../../../entities/Recipe/lib/data/recipes.json"

export const timeOptions = Array.from(
  new Set(recipes.map(({ cookingTimeMin }) => cookingTimeMin))
).sort((a, b) => a - b)
