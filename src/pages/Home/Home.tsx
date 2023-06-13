import { useFilteredRecipes } from "../../entities/Recipe/lib/hooks"
import { RecipeList } from "../../entities/Recipe/ui/RecipeList"
import { FiltersTable } from "../../widgets/FiltersTable/ui/FiltersTable"
import styles from "./Home.module.scss"
import { FC } from "react"

export const Home: FC = () => {
  const { recipes } = useFilteredRecipes()

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
