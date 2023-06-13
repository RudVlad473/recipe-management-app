import { TRecipeCard } from "../../lib/types"
import { RecipeCard } from "../RecipeCard"
import styles from "./RecipeList.module.scss"
import { Empty } from "antd"
import { FC } from "react"

type RecipeListProps = {
  recipes: TRecipeCard[]
}

export const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
  if (!recipes.length) {
    return <Empty />
  }

  return (
    <ul className={styles["recipe-list"]}>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard {...recipe} />
        </li>
      ))}
    </ul>
  )
}
