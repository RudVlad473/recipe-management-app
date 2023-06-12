import styles from "./Home.module.scss"
import React, { FC } from "react"

export const Home: FC = () => {
  return (
    <div className={styles.content}>
      <aside className={styles.sider}>
        <h1>Categories</h1>
        <CategoryMenu disabled={loading} />
      </aside>

      <div className={styles.main}>{loading ? <Spinner /> : <ItemList items={items} />}</div>
    </div>
  )
}
