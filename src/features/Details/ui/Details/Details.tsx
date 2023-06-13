import { Portal } from "../../../../shared/ui/Portal"
import { Auth } from "../../../../widgets/Auth/ui"
import styles from "./Details.module.scss"
import { HeartOutlined, UserOutlined } from "@ant-design/icons"
import React, { FC } from "react"

export const Details: FC = () => {
  return (
    <>
      <div className={styles.details}>
        <div>
          <HeartOutlined />
        </div>

        <div>
          <UserOutlined />
        </div>
      </div>
      <Portal>
        <div className={styles["auth-modal"]}>
          <Auth />
        </div>
      </Portal>
    </>
  )
}
