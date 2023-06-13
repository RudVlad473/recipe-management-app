import { TRecipeCard } from "../../lib/types"
import styles from "./RecipeCard.module.scss"
import { StarOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { FC } from "react"

type RecipeCardProps = TRecipeCard

export const RecipeCard: FC<RecipeCardProps> = ({ description, title, imageUrl }) => {
  return (
    <section className={styles["recipe"]}>
      <div className={styles.image}>
        {
          <Image
            style={{ maxWidth: "200px" }}
            src={imageUrl}
          />
        }
      </div>
      <aside className={styles.star}>
        <StarOutlined />
      </aside>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.desc}>{description}</h3>
      <footer className={styles.click}>Click to see recipe</footer>
    </section>
  )
}
