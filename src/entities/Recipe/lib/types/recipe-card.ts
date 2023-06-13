import { TRecipe } from "."

export type TRecipeCard = Pick<TRecipe, "title" | "imageUrl" | "description">
