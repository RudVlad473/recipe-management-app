import { useAppDispatch } from "../../../../app/lib"
import { appendFilters } from "../../../../entities/Recipe/model/filtersSlice"
import { timeOptions } from "../../consts"
import styles from "./FiltersTable.module.scss"
import { Select } from "antd"
import { FC } from "react"

export const FiltersTable: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles["filter-table"]}>
      <div className={styles.filter}>
        <h3>Pick time of cooking</h3>
        <Select
          style={{ width: 120 }}
          onChange={(value) => {
            const time = parseInt(value)

            dispatch(
              appendFilters({
                cookingTimeMin: time,
              })
            )
          }}
          options={timeOptions.map((time) => ({
            value: time,
            label: `${time} min`,
          }))}
        />
      </div>
    </div>
  )
}
