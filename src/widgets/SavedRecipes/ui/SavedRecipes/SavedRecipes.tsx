import { useAppDispatch, useAppSelector } from "../../../../app/lib"
import recipes from "../../../../entities/Recipe/lib/data/recipes.json"
import { removeRecipe, selectRecipes } from "../../../../entities/Recipe/model"
import { RecipeEntity } from "../../../../entities/Recipe/ui/RecipeEntity"
import styles from "./SavedRecipes.module.scss"
import { DeleteOutlined } from "@ant-design/icons"
import { Empty } from "antd"
import { FC } from "react"

export const SavedRecipes: FC = () => {
  const dispatch = useAppDispatch()

  const recipesIds = useAppSelector(selectRecipes)

  if (!recipesIds.length) {
    return <Empty />
  }

  const joinedRecipes = recipesIds
    .map(({ id }) => recipes.find((recipe) => recipe.id === id))
    .filter((v) => v)

  return (
    <ul className={styles["recipes"]}>
      {joinedRecipes.map((recipe) => (
        <li
          className={styles["recipe"]}
          key={recipe.id}>
          <RecipeEntity {...recipe} />
          <span className={styles["action-list"]}>
            <div
              className={styles.action}
              onClick={() => {
                dispatch(
                  removeRecipe({
                    id: recipe.id,
                  })
                )
              }}>
              <DeleteOutlined />
            </div>
          </span>
        </li>
      ))}
    </ul>
  )
}
