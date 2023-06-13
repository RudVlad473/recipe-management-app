import { useAppDispatch } from "../../../../app/lib"
import { appendFilters, dropFilters } from "../../../../entities/Recipe/model/filtersSlice"
import { Details } from "../../../../features/Details/ui/Details"
import { SearchBar } from "../../../../features/SearchBar/ui"
import styles from "./HomeLayout.module.scss"
import { FC, PropsWithChildren, useCallback } from "react"

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch()

  const handleOnSearch = useCallback(
    (value: string) => {
      dispatch(
        appendFilters({
          title: value,
        })
      )
    },
    [dispatch]
  )

  const handleOnChange = useCallback(
    (value: string) => {
      if (value === "") {
        dispatch(
          dropFilters({
            title: true,
          })
        )
      }
    },
    [dispatch]
  )

  return (
    <main className={styles["home-layout"]}>
      <div className={styles["search-bar"]}>
        <SearchBar
          onSearch={handleOnSearch}
          onChange={handleOnChange}
          // isLoading={loading}
          allowClear
        />
      </div>

      <div className={styles["details"]}>
        <Details />
      </div>

      <section className={styles["children"]}>{children}</section>
    </main>
  )
}
