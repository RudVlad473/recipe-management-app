import { DeleteOutlined } from "@ant-design/icons"
import { Tooltip } from "antd"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../app/lib"
import { useFilteredRecipes } from "../../entities/Recipe/lib/hooks"
import { dropFilters, selectFilters } from "../../entities/Recipe/model/filtersSlice"
import { RecipeList } from "../../entities/Recipe/ui/RecipeList"
import { anyValueFull } from "../../shared/lib/utils"
import { FiltersTable } from "../../widgets/FiltersTable/ui/FiltersTable"
import styles from "./Home.module.scss"

export const Home: FC = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(selectFilters)

  const anyFilters = anyValueFull(filters)

  const { recipes } = useFilteredRecipes()

  function handleDropAllFilters() {
    dispatch(dropFilters({}))
  }

  return (
    <div className={styles.content}>
      <aside className={styles.sider}>
        <div className={styles["sider__header"]}>
          <h1>Filters</h1>

          {anyFilters && (
            <div onClick={handleDropAllFilters}>
              <Tooltip title={"Drop ALL filters"}>
                <DeleteOutlined />
              </Tooltip>
            </div>
          )}
        </div>
        <FiltersTable />
      </aside>

      <div className={styles.main}>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  )
}
