import { SearchBar } from "../../../../features/SearchBar/ui"
import styles from "./HomeLayout.module.scss"
import React, { FC, PropsWithChildren } from "react"

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles["home-layout"]}>
      {/* <div
        className={styles.home}
        onClick={() => navigate(HomeRoutes.HOME)}>
        <HomeOutlined style={{ fontSize: "200%" }} />
      </div> */}
      <div className={styles["search-bar"]}>
        <SearchBar
          // onSearch={handleOnSearch}
          // onChange={handleOnChange}
          // isLoading={loading}
          allowClear
        />
      </div>

      {/* <div className={styles["details"]}>
        <Details />
      </div> */}

      <section className={styles["children"]}>{children}</section>
    </main>
  )
}
