import { useAppDispatch } from "../../../../app/lib"
import { appendFilters } from "../../../../entities/Recipe/model/filtersSlice"
import { timeOptions } from "../../consts"
import { Select } from "antd"
import { FC } from "react"

export const FiltersTable: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Select
        style={{ width: 120 }}
        onChange={(value, option) => {
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
  )
}
