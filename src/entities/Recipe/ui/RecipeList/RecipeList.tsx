import { TRecipeCard } from "../../lib/types"
import { RecipeCard } from "../RecipeCard"
import styles from "./RecipeList.module.scss"
import React, { FC } from "react"

type RecipeListProps = {
  recipes: TRecipeCard[]
}

export const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
  return (
    <ul className={styles['recipe-list']}>
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}
    </ul>
  )
}
