import { TRecipe } from "."

export type TRecipeCard = Pick<TRecipe, "id" | "title" | "imageUrl" | "description">
