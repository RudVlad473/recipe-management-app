import { TRecipeCard } from "../../lib/types"
import styles from "./RecipeEntity.module.scss"
import { Tooltip } from "antd"
import classNames from "classnames"
import { FC } from "react"

type RecipeEntityProps = TRecipeCard

export const RecipeEntity: FC<RecipeEntityProps> = ({ description, id, title, imageUrl }) => {
  return (
    <section className={classNames(styles.recipe, "ellipsis")}>
      <Tooltip title={title}>
        <h1 className={classNames(styles.title, "ellipsis")}>{title}</h1>
      </Tooltip>
      <Tooltip title={description}>
        <article className={classNames(styles.desc, "ellipsis")}>{description}</article>
      </Tooltip>
    </section>
  )
}
