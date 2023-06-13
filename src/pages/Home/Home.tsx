import { FC } from "react"
import recipes from "../../entities/Recipe/lib/data/recipes.json"
import { RecipeList } from "../../entities/Recipe/ui/RecipeList"
import { FiltersTable } from "../../widgets/FiltersTable/ui/FiltersTable"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  return (
    <div className={styles.content}>
      <aside className={styles.sider}>
        <h1>Filters</h1>
        <FiltersTable />
      </aside>

      <div className={styles.main}>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  )
}
