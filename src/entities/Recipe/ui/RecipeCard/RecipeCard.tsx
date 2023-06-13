import { useAppDispatch, useAppSelector } from "../../../../app/lib"
import { selectIsLoggedIn } from "../../../User/model"
import { TRecipeCard } from "../../lib/types"
import { addRecipe } from "../../model"
import styles from "./RecipeCard.module.scss"
import { StarOutlined } from "@ant-design/icons"
import { Image } from "antd"
import classNames from "classnames"
import { FC } from "react"

type RecipeCardProps = TRecipeCard

export const RecipeCard: FC<RecipeCardProps> = ({ id, description, title, imageUrl }) => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  function handleAddFavoriteRecipe() {
    dispatch(addRecipe({ id }))
  }

  return (
    <section className={classNames(styles["recipe"])}>
      <div className={styles.image}>
        {
          <Image
            style={{ maxWidth: "200px" }}
            src={imageUrl}
          />
        }
      </div>
      {isLoggedIn && (
        <aside
          className={styles.star}
          onClick={handleAddFavoriteRecipe}>
          <StarOutlined />
        </aside>
      )}
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.desc}>{description}</h3>
      <footer className={styles.click}>Click to see recipe</footer>
    </section>
  )
}
